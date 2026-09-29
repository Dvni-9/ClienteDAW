"use strict";

let fechaVacia= new Date();
console.log(fechaVacia);

let fechaMiliseg= new Date(163128974231879);
// let fechaMiliseg= new Date(1);
console.log(fechaMiliseg);

let cadenaFecha = "2004-02-06";
// let cadenaFecha = "06-02-2004";

let fechaCadena = new Date(cadenaFecha);
console.log(fechaCadena);

let anno_num = 2024, mes_num = 12, dia_num = 27, hor_num = 12, min_num=21, seg_num=11, mils_num=201;//empieza desde el mes 0, si pones más de 12 meses te cuenta el año siguiente
let fechaConstruida = new Date(anno_num,mes_num,dia_num,hor_num,min_num,seg_num,mils_num);
console.log(fechaConstruida);


console.log("");
console.log(Date.now());
console.log(Date.parse("2004-02-06"));//si pones una fecha anterior al 1 de enero de 1970, te pone el valor en negativop

console.log("");
console.log("getFullYear");
console.log(fechaConstruida.getFullYear());
fechaConstruida.setFullYear(2006);
console.log(fechaConstruida.getFullYear());
console.log(fechaConstruida);

console.log("");
console.log("getMonth");
console.log(fechaConstruida.getMonth());
fechaConstruida.setMonth(0o7);
console.log(fechaConstruida.getMonth());
console.log(fechaConstruida);

console.log("");
console.log("getDate");
console.log(fechaConstruida.getDate());
fechaConstruida.setDate(29);
console.log(fechaConstruida.getDate());
console.log(fechaConstruida);

console.log("");
console.log("getDay");//el 0 es el domingo, el 6 el sábado
console.log(fechaConstruida.getDay());
// fechaConstruida.setDay(5);
console.log(fechaConstruida.getDay());
console.log(fechaConstruida);



console.log("");
console.log("getHours");
console.log(fechaConstruida.getHours());
fechaConstruida.setHours(18);
console.log(fechaConstruida.getHours());
console.log(fechaConstruida);


console.log("");
console.log("getMinutes");
console.log(fechaConstruida.getMinutes());
fechaConstruida.setMinutes(18);
console.log(fechaConstruida.getMinutes());
console.log(fechaConstruida);


console.log("");
console.log("getSeconds");
console.log(fechaConstruida.getSeconds());
fechaConstruida.setSeconds(18);
console.log(fechaConstruida.getSeconds());
console.log(fechaConstruida);


console.log("");
console.log("getMiliseconds");
console.log(fechaConstruida.getMilliseconds());
fechaConstruida.setMilliseconds(18);
console.log(fechaConstruida.getMilliseconds());
console.log(fechaConstruida);


console.log("");
console.log("getTime");
console.log(fechaConstruida.getTime());
fechaConstruida.setTime(1790665000000);
console.log(fechaConstruida.getTime());
console.log(fechaConstruida);


console.log("");
console.log(fechaConstruida);