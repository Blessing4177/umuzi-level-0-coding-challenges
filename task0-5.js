function calcAreaOfTriangle(x, y, z) {
    let semiPerimeter = (x + y + z) / 2;
    let heronValue = semiPerimeter * ((semiPerimeter - x) * (semiPerimeter - y) * (semiPerimeter - z));
    let area = Math.sqrt(Math.abs(heronValue)).toFixed(2);

    return `The area of this triangle is ${area} sq.units`;
}

console.log(calcAreaOfTriangle(26, 10, 3));