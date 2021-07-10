function vowelCount(str1, str2) {
    const str1Arr = str1.toLowerCase().split('');
    const str2Arr = str2.toLowerCase().split('');
    let commonCharArr = [];

    for (let i = 0; i < str1Arr.length; i++) {
        if (str2Arr.includes(str1Arr[i])) {
            if (!(commonCharArr.includes(str1Arr[i]))) {
                commonCharArr.push(str1Arr[i])
            }
        }
    }

    console.log(`Common letters: ${commonCharArr.join(', ')}`);
}

vowelCount('house', 'computers');