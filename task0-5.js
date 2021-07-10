function calcAreaOfTriangle(x, y, z) {
    let semiPerimeter = (x + y + z) / 2;
    let heronValue = semiPerimeter * ((semiPerimeter - x) * (semiPerimeter - y) * (semiPerimeter - z));
    let area = Math.sqrt(Math.abs(heronValue));

    return `The area of this triangle is ${area.toFixed(2)} sq.units`;
}

console.log(calcAreaOfTriangle(26, 10, 3));