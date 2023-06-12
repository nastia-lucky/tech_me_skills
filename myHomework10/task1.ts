abstract class Car {
    protected carType: string;
    protected carEngine: string;

    constructor(type: string, engine: string) {
        this.carType = type;
        this.carEngine = engine;
    }

    abstract getMaxSpeed(): number;
    abstract getApproximatePrice(): number;

    getInfo() {
        return `This is ${this.carType}. It has ${this.carEngine} engine and max speed equal to ${this.getMaxSpeed()}.
         Approximetly cost of the car is ${this.getApproximatePrice()}`;
    }

}

class SportCar extends Car {

    private static maxSpeed = 340;
    private static approxPrice = 60000;

    constructor(type: string, engine: string) {
        super(type, engine);
    }

    getMaxSpeed(): number {
        return SportCar.maxSpeed;
    }

    getApproximatePrice(): number {
        return SportCar.approxPrice;

    }

}

class LuxuryCar extends Car {

    private static maxSpeed = 560;
    private static approxPrice = 78000;

    constructor(type: string, engine: string) {
        super(type, engine);
    }

    getMaxSpeed(): number {
        return LuxuryCar.maxSpeed;
    }

    getApproximatePrice(): number {
        return LuxuryCar.approxPrice;
    }

}

let mySportCar = new SportCar("Ferrari", "some type");
console.log(mySportCar.getInfo());
let myLuxuryCar = new SportCar("BMW", "electro");
console.log(myLuxuryCar.getInfo());


