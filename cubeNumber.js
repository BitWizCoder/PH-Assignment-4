function cubeNumber(number) {
  let cube = number * number * number;
  if (isNaN(number)) {
      return "Please give a valid number.";
} else {
      return cube;
  } 
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(-2));