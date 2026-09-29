const a = 1, b =2;
console.log('Suma: ${a+b}');
console.log("Suma: ${a+b}");
console.log(`Suma: ${a+b}`);

console.log("");
let anno_num = 2024, mes_num = 11, dia_num = 27, hor_num = 12, min_num=21, seg_num=11, mils_num=201;//empieza desde el mes 0, si pones más de 12 meses te cuenta el año siguiente
let fechaConstruida = new Date(anno_num,mes_num,dia_num,hor_num,min_num,seg_num,mils_num);
console.log(fechaConstruida);
//esto sirver para poder imprimir por pantalla una línea muy lagra de 
//forma cómoda, es para evitarnos el tener que escrollear lateralmente
console.log(`
Dia: ${fechaConstruida.getDate()}
Mes: ${fechaConstruida.getMonth()}
Anno: ${fechaConstruida.getFullYear()}
Hora: ${fechaConstruida.getHours()}
Minuto: ${fechaConstruida.getMinutes()}
Segundos: ${fechaConstruida.getSeconds()}
Milisegundos: ${fechaConstruida.getMilliseconds()}
`);

function suma (a,b,c,d){
    console.log(arguments.length)
    if(a!=undefined && b!= undefined){
        return a+b+c+d;
    }
    

}
console.log(suma("hola ","caracola "));
console.log(suma());

console.log("");


function foo(texto,p1,p2,p3){
    console.log(texto,p1,p2,p3);
    return `La suma es: ${p1+p2}`;
}
let res= foo`La suma de ${a}y ${b} es ${a+b}`;
console.log(res);