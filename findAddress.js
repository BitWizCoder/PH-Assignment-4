function findAddress(obj) {
  //   if (!obj.street || !obj.house || !obj.society) {
  //     return "__";
  //   }
  let concatStr = "";
  if (obj.street) {
    concatStr += obj.street + ",";
  } else if (!obj.street) {
    concatStr += "," + "__";
  }

  if (obj.house) {
    concatStr += obj.house + ",";
  } else if (!obj.house) {
    concatStr += "," + "__";
  }

  if (obj.society) {
    concatStr += obj.society;
  } else if (!obj.society) {
    concatStr += "," + "__";
  }

  return concatStr;
}

const obj = { street: 10, house: "15A", society: "Earth Perfect" };
const obj2 = { street: 10 };
console.log(findAddress(obj));
console.log(findAddress(obj2));
