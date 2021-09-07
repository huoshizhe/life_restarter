export const AllCardList = [
  {
    fileName: "0",
    groupName: "普通事件",
    name: "无事发生",
    conditions: "",
    text: "无事发生",
    actions: ""
  },
  {
    fileName: "2",
    groupName: "魔法少女事件组",
    name: "签订契约",
    conditions: "年龄>=12 年龄<18 魅力>8 性别=女",
    text: "签订了契约，成为魔法少女。",
    actions: "魅力+1 体质+1"
  }, {
    fileName: "2",
    groupName: "魔法少女事件组",
    name: "战斗01",
    conditions: "年龄<18 前置事件=签订契约",
    text: "打败了怪兽。",
    actions: "财富+1"
  }
];