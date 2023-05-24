function getSumNumbers(a: number): number {
    let sum: number = 0;

    while (a != 0) {
        let rest = a % 10;
        sum = sum + rest;
        a = (a - rest) / 10;
        console.log(rest);
    }

    return sum;
}

console.log(getSumNumbers(253));