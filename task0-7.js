function celciusToFahren(num) {
    return ((num * 9/5) + 32).toFixed(2);
}

function fahrenToCelcius(num) {
    return ((num - 32) * 5/9).toFixed(2);
}

console.log(celciusToFahren(21));
console.log(fahrenToCelcius(75));