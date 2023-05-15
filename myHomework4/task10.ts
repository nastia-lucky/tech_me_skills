let number3: number = 3.66666;

function toFloor(a: number) {
    return Math.floor(a);
}

function toCeil(a: number) {
    return Math.ceil(a);
}

function justRound(a: number) {
    return Math.round(a);
}

console.log(toFloor(number3));
console.log(toCeil(number3));
console.log(justRound(number3));