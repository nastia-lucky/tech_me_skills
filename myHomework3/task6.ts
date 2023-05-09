let firstName: string = "Mary";
let someAge: number = 20;
let isHappy: boolean = true;

const [firstNameName] = Object.keys({ firstName });
const [somaAgeName] = Object.keys({ someAge });
const [isHappyName] = Object.keys({ isHappy });

console.log(`Variable: ${firstNameName} have type: ${typeof firstName}`);
console.log(`Variable: ${somaAgeName} have type: ${typeof someAge}`);
console.log(`Variable: ${isHappyName} have type: ${typeof isHappy}`);



