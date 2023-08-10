function matchFinder(string1, string2) {
  if (typeof string1 == "string" && typeof string2 == "string") {
    let match = string1.includes(string2);
    return match;
  } else {
    return "Please give valid strings.";
  }
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pet"));
console.log(matchFinder(true, [3]));
