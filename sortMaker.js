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

console.log(sortMaker([0, 1]));
console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));


