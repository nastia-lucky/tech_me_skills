
function getIntRandom(a: number, b: number) {
    return Math.floor(Math.random() * (b - a)) + a;
}

console.log(getIntRandom(3, 34));