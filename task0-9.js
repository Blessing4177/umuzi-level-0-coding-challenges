function vowelCount(str) {
    let vowelsInString = [];
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.toLowerCase().split('');

    for (let i = 0; i < strArr.length; i++) {
        if (vowelArr.includes(strArr[i])) {
            if (!(vowelsInString.includes(strArr[i]))) {
                vowelsInString.push(strArr[i])
            }
        }
    }

    console.log(`Vowels: ${vowelsInString.join(', ')}.`);
}

vowelCount('Umuzi');