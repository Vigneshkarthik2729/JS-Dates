// js dates
const a=new Date();
console.log(a);
const b = new Date(2018, 10, 24, 10, 33, 30);
console.log(b);

// js date get method
const i= new Date();
console.log(i.getDate());
console.log(i.getDay());
console.log(i.getFullYear());
console.log(i.getHours());
console.log(i.getMinutes());
console.log(i.getSeconds()); 
console.log(i.getMilliseconds());
console.log(i.getTime());  
console.log(i.getMonth());

// js date set method
const j= new Date();
j.setHours(3);
console.log(j);
j.setMinutes(10);
console.log(j);
j.setDate(25);
console.log(j);
j.setSeconds(5);
console.log(j);
j.setFullYear(2020);
console.log(j);
j.setMilliseconds(2345678);
console.log(j);
j.setTime(112555114);
console.log(j);