function cubeNumber(number) {
  let cube = number * number * number;
  if (isNaN(number)) {
    return "Please give a valid number.";
  } else {
    return cube;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 == "string" && typeof string2 == "string") {
    let match = string1.includes(string2);
    return match;
  } else {
    return "Please give valid strings.";
  }
}

function sortMaker(arr) {
  let sorted = [];
  if (arr[0] < -0 || arr[1] < -0) {
    return "Invalid Input";
  } else if (arr[0] < arr[1]) {
    [arr[0], arr[1]] = [arr[1], arr[0]]; // Swap the elements
  } else if (arr[0] === arr[1]) {
    return "equal";
  }

  return arr;
}

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

function canPay(changeArray, totalDue) {
  let total = 0;
  for (let i = 0; i < changeArray.length; i++) {
    total += changeArray[i];
  }
  if (changeArray.length == 0) {
    return "add arry with items";
  } else if (total >= totalDue) {
    return true;
  } else {
    return false;
  }
}
