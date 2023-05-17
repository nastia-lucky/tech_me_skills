const myDate: Date=new Date();

let localDate: string = myDate.toLocaleDateString();
let localTime: string = myDate.toLocaleTimeString();

let ourTime=`текущая дата: ${localDate}. Текущее время ${localTime}.`

console.log(ourTime);