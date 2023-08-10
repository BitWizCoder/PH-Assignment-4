function findAddress(obj) {
  let concatStr = "";
  if (obj.street) {
    concatStr += obj.street + ",";
  } else if (!obj.street) {
    concatStr += "__" + ",";
  }

  if (obj.house) {
    concatStr += obj.house + ",";
  } else if (!obj.house) {
    concatStr += "__" + ",";
  }

  if (obj.society) {
    concatStr += obj.society;
  } else if (!obj.society) {
    concatStr += "__" + ",";
  }

  return concatStr;
}

const obj = { street: 10, house: "15A", society: "Earth Perfect" };
const obj2 = {house: "15A", society: "Earth Perfect" };
console.log(findAddress(obj));
console.log(findAddress(obj2));
