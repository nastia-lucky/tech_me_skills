const mixedNumbers: number[] = [-14, 24, -89, 43, 0, -1, 412, 4];

const positive: number[] = new Array;
const negative: number[] = new Array;

for (let el of mixedNumbers) {
    if (el >= 0) {
        positive.push(el);
    }
    else if (el < 0) {
        negative.push(el);
    }
}

console.log(positive);
console.log(negative);


