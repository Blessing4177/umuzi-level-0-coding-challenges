function findCommonChar(str1, str2) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    let commonCharArr = [];

    for (let i = 0; i < lowerStr1.length; i++) {
        if (lowerStr2.includes(lowerStr1[i])) {
            if (!(commonCharArr.includes(lowerStr1[i]))) {
                commonCharArr.push(lowerStr1[i])
            }
        }
    }

    console.log(`Common letters: ${commonCharArr.join(', ')}`);

    
}

findCommonChar('house', 'computers');