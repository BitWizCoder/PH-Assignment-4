function cubeNumber(number) {
  // this cube variable (calculation) shouldn't be here. it should be inside else clause.
  let cube = number * number * number;
  if (isNaN(number)) {
    return "Please give a valid number.";
  } else {
    return cube;
  }
}

// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber(-2));


console.log(cubeNumber(5));
console.log(cubeNumber('hello'));