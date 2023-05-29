const numbers2: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let isOurValue: boolean = numbers2.some((value: number) => value % 3 === 0 && value % 5 === 0);

console.log(isOurValue);
