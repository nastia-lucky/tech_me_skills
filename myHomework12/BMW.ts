import { Car } from "./Car";

export class BMW extends Car {

    private static power = 34;
    private static speed = 456;

    constructor(engine:string, wheelType:string){
        super(engine, wheelType);
    }

    public isSpeedInRange(speed: number): boolean {
        if (speed > BMW.speed) {
            throw new Error(`Speed is too high for this car. Please find somthing else`);
        }
        else {
            return true;
        }
    }


}