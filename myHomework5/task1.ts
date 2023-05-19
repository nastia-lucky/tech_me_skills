function getSum(a: number): number {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(getSum(100));