import xlsx from 'node-xlsx';
import * as fs from "fs";

const cardDataList = fs.readdirSync('data')
  .filter(fileName => !fileName.includes('~$'))
  .filter(fileName => fileName.includes('.xlsx'))
  .map(fileName => `data/${fileName}`)
  .map(path => {
    return xlsx
      .parse(path)
      .map(sheet => loadItemData(sheet.data, path, sheet.name));
  }).flat(2);

fs.writeFileSync('src/cards.js', `export const AllCardList = ${JSON.stringify(cardDataList)};`);

function loadItemData(data, fileName, sheetName) {
  const columeNameMap = {};
  data[0].forEach((columeName, idx) => {
    columeNameMap[columeName] = idx;
  });

  return data
    .filter((_, idx) => idx != 0)
    .map(line => {
      return {
        fileName: `${fileName}/${sheetName}`,
        groupName: line[columeNameMap['组名']],
        name: line[columeNameMap['事件名']],
        conditions: line[columeNameMap['条件']],
        text: line[columeNameMap['文字']],
        actions: line[columeNameMap['动作']],
      }
    });
}