export abstract class Car {

   protected engine: string;
   protected wheelType: string;

   constructor(engine: string, wheeltype: string) {
      this.engine = engine;
      this.wheelType = wheeltype;
   }

   abstract isSpeedInRange(speed: number)

} 