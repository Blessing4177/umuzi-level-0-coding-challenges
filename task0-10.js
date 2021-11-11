function findCommonChar(str1, str2) {
  const commonCharsArr = str1
    .toLowerCase()
    .split("")
    .filter((value) => str2.includes(value));
  let filteredCharsArr = [];

  commonCharsArr.forEach((char) => {
    if (!filteredCharsArr.includes(char)) {
      filteredCharsArr.push(char);
    }
  });

  console.log(`Common letters: ${filteredCharsArr.join(", ")}`);
}

findCommonChar("letters ", "they");
