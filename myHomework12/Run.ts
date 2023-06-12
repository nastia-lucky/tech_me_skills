import { Audi } from "./Audi";
import { BMW } from "./BMW";


let myBMW= new BMW("auto", "rigt");
let myAudi= new Audi("mech", "left");

console.log(myBMW.isSpeedInRange(457));
console.log(myAudi.isSpeedInRange(347));