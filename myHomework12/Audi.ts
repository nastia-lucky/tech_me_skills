import { Car } from "./Car";

export class Audi extends Car {

    private static power = 30;
    private static speed = 350;

    constructor(engine: string, wheelType: string) {
        super(engine, wheelType);
    }

    public isSpeedInRange(speed: number): boolean {
        if (speed > Audi.speed) {
            throw new Error(`Speed is too high for this car. Please find somthing else`);
        }
        else {
            return true;
        }
    }

}