function getSumma(a: number, b: number): number {
    let sum: number = 0;
    if (a === b) {
        return a;
    }
    else if (b < a) {
        let c = b;
        while (c < a) {
            sum = sum + c;
            c++;
        }
        sum = sum + a;
    }
    else if (a < b) {
        let c = a;
        while (c < b) {
            sum = sum + c;
            c++;
        }
        sum = sum + b;
    }
    return sum;
}

console.log(getSumma(-1, 0));