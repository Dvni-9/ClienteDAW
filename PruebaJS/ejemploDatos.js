let numero1 = 10;               
console.log(typeof numero1);
let numero2 = 1.03;             
console.log(typeof numero2);
let booleano = true;            
console.log(typeof booleano);
let cadena="Hola mundo";        
console.log(typeof cadena);
let nulo = null;                
console.log(typeof nulo);
                                
console.log(nulo);
let indefinido;                 
console.log(typeof indefinido);
let a="hola"; 
console.log(typeof a + "soy una taza una tetera una cuchara y un cucharón");                           
console.log(indefinido);
let obejeto={a:1};              
console.log(typeof obejeto);


console.log("");
console.log("EJERCICIO 2");

//Tipos de datos, cuando se hace una operacion con un tipo de dato y otro, el resultado es del tipo de dato que tenga mayor precision.
console.log(cadena.constructor.name);
console.log(numero1.constructor.name);
console.log(booleano.constructor.name);
console.log(String.constructor.name);
console.log(Number.constructor.name);

// console.log(indefinido.constructor.name);
// console.log(a);

console.log("");
console.log("EJERCICIO 3");
console.log("Diferencia entre var y let");
/* 
const B = 10;
let C = B + 10;
C++;
console.log(B+10);
console.log(C);
B ++; //intenta cambiar el valor de una constante, lo que genera un error.
console.log(B); */


let a1 = 1;
{
    let a2=2;
    console.log(a1);
    console.log(a2);
}
(function f(s){
    var saludo="Saludos "+s;
    console.log(saludo+s); // con esto lo saco dos veces, se puede poner en la propia variable y en el propio console log
})("Daniel");

(function f(){
    let a3=3;
    console.log(a1);
    // console.log(a2);
    console.log(a3);
    if(true){
        let a4=4;
        console.log(a1);
        // console.log(a2);
        console.log(a3);
        console.log(a4);
    }
})();
function f2(){
    let a5="Si funciona así";
    console.log(a5);
}
console.log(f2); //si hacemos console log a una funcion nos devuelve el contenido de la funcion, no la ejecuta. 
f2(); //ejecuta la funcion
function f3(){
    let a1=12;
    console.log(a1);
}
f3();
console.log(a1); //a1 es 1, la funcion f3 tiene su propio ambito y no afecta a la variable a1 que esta fuera de la funcion.
