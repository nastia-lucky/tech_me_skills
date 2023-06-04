type iCar = {
    wheelType: string,
    doorNumber: number,
}

let myCar1: iCar = {
    wheelType: "left-hand",
    doorNumber: 3
}

let myCar2: iCar = {
    wheelType: "right-hand",
    doorNumber: 4
}

function getCarInfo(): string {
    return `This car has ${this.doorNumber} doors and this is ${this.wheelType} drive car`;
}

console.log(getCarInfo.call(myCar1));
console.log(getCarInfo.call(myCar2));


