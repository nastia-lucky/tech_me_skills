function getFloatRandom(a: number, b: number) {
    return Math.random() * (b - a) + a;
}

console.log(getFloatRandom(3.444, 34.5555));