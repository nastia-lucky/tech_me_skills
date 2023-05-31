const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];

let newArray: number[] = numbers.filter((value: number) => value >= 0)

console.log(newArray);