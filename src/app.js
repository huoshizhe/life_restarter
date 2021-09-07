import { AllCardList } from "./cards.js";

class Character {
  wealth; // 财富
  charm; // 魅力
  intelligence; // 智力
  physical; // 体质
  gender; // 性别
  age; // 年龄
  lucky; // 幸运
  will; // 意志

  constructor(wealth, charm, intelligence, physical) {
    this.wealth = wealth;
    this.charm = charm;
    this.intelligence = intelligence;
    this.physical = physical;
    this.gender = ["男", "女"][RandomInt(2)];
    this.age = 0;
    this.lucky = RandomInt(10) + 1;
    this.will = RandomInt(10) + 1;

    this.initCards();
  };

  allCardList;
  initCards() {
    this.allCardList = AllCardList.map(cardData => {
      return {
        fileName: cardData.fileName,
        group: cardData.fileName,
        name: cardData.name,
        conditionStr: cardData.conditions,
        actionStr: cardData.actions,
        text: cardData.text
      };
    }).map(cardData => new Card(cardData));
  };

  getProp(name) {
    switch (name) {
      case "财富":
        return this.wealth;
      case "魅力":
        return this.charm;
      case "智力":
        return this.intelligence;
      case "体质":
        return this.physical;
      case "性别":
        return this.gender;
      case "年龄":
        return this.age;
      case "幸运":
        return this.lucky;
      case "意志":
        return this.will;
      default:
        throw "错误的类型: " + name;
    }
  }

  setProp(name, value) {
    switch (name) {
      case "财富":
        this.wealth += value;
        break;
      case "魅力":
        this.charm += value;
        break;
      case "智力":
        this.intelligence += value;
        break;
      case "体质":
        this.physical += value;
        break;
      case "性别":
        this.gender += value;
        break;
      case "年龄":
        this.age += value;
        break;
      case "幸运":
        this.lucky += value;
        break;
      case "意志":
        this.will += value;
        break;
      default:
        throw "错误的类型:" + name;
    }
  }

  getCardList = [];
  chooseCard() {
    const cards = this.allCardList.filter(card => card.check(this));
    const choosenCard = cards[RandomInt(cards.length)];
    this.getCardList.push(choosenCard);
    this.age++;
    console.log(`${this.age}岁：${choosenCard.text}`);
  }
}

class Card {
  fileName; // 文件名
  group; // 组
  name; // 名字
  conditions; // 条件
  actions; // 结果
  text; // 输出文字

  constructor({ fileName, group, name, conditionStr, actionStr, text }) {
    this.fileName = fileName;
    this.group = group;
    this.name = name;
    this.text = text;
    this.conditions = conditionStr
      .split(' ')
      .map(str => {
        const signs = ["<=", ">=", "!=", "=", "<", ">"];
        const sign = signs.find(sign => str.includes(sign));
        const left = str.split(sign)[0];
        const right = str.split(sign)[1];
        return { sign, left, right };
      });

    console.log('this.conditions = ' + JSON.stringify(this.conditions));

    this.actions = actionStr
      .split(' ')
      .map(str => {
        const signs = ["+", "-"];
        const sign = signs.find(sign => str.includes(sign));
        const left = str.split(sign)[0];
        const right = str.split(sign)[1];
        return { sign, left, right };
      });
  }

  check(character) {
    return this.conditions.every((condition) => {
      if (condition.left == '前置事件') {
        const card = character.getCardList.find(card => card.name == condition.right);
        if (card) {
          return true;
        }
        return false;
      }

      if (condition.left == '') {
        return true;
      }

      let rightNumber = parseFloat(condition.right);
      if (isNaN(rightNumber)) {
        rightNumber = character.getProp(condition.right);
      }
      let leftNumber = character.getProp(condition.left);

      switch (condition.sign) {
        case "<":
          return leftNumber < rightNumber;
        case ">":
          return leftNumber > rightNumber;
        case "<=":
          return leftNumber <= rightNumber;
        case ">=":
          return leftNumber >= rightNumber;
        case "=":
          return leftNumber == rightNumber;
        case "!=":
          return leftNumber != rightNumber;
        default:
          break;
      }
    });
  }

  executeAction(character) {
    if (condition.left == '死亡') {
      // TODO: 
      return;
    }

    let rightNumber = parseFloat(condition.right);
    if (isNaN(rightNumber)) {
      rightNumber = character.getProp(condition.right);
    }
    let leftNumber = character.getProp(condition.left);

    switch (condition.sign) {
      case "+":
        character.setProp(leftNumber, rightNumber);
        break;
      case "-":
        character.setProp(leftNumber, -rightNumber);
        break;
      default:
        break;
    }
  }
}

function RandomInt(a, b = 0) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  return Math.floor(Math.random() * (max - min) + min);
}

const character = new Character(3, 5, 7, 9);
setInterval(() => {
  character.chooseCard();
}, 1000);