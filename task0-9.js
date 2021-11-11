function vowelCount(str) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  const strArr = str
    .toLowerCase()
    .split("")
    .filter((value) => vowelArr.includes(value));
  let vowelsInString = [];

  strArr.forEach((char) => {
    if (!vowelsInString.includes(char)) {
      vowelsInString.push(char);
    }
  });
  console.log(`Vowels: ${vowelsInString.join(", ")}`);
}

vowelCount("Umuzi");
