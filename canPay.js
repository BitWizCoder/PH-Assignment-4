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

console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));
console.log(canPay([], 10));
