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
// fvar();
{
    var a2=2;
    console.log(a1);
    console.log(a2);
    fvar();
    // console.log(a3); // si llamas a una variable declarada con var fuera del ambito donde se ha declarado, te da error, porque no existe.
                    // incluso si llamamos primero a la funcion que la contiene, nos da error, porque no existe en el ambito global.
}
function fvar(){
    var a3=3;
    console.log(a1);
    console.log(a2);
    console.log(a3);
    if(true){
        var a4=4;
        console.log(a1);
        console.log(a2+" a2 DE VAR");
        console.log(a3+" a3 DE VAR");
        console.log(a4+" a4 DE VAR");
    }
}
//la principal diferencia es que las variables declaradas con var tienen un ambito global, mientras que las declaradas con let tienen un ambito local.


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

const a6={
    huevos:function(){
        console.log("me han tirado un huevo");
    }
};
a6.huevos();//si declaras la funcion dentro de un objeto, para ejecutarla hay que poner el nombre del objeto y el nombre de la funcion
console.log(a6);


console.log("");
console.log(posterior);
var posterior=10;
console.log(posterior);
// console.log(letposterior);
let letposterior=20;
console.log(letposterior);

let a10=1;
console.log(a10);
(function f10(){
    var a10=2;
    console.log(a10);
})();
console.log(a10);//aunque llamemos let fuera de la funcion, y var dentro de la funcion, no se sobreescribe el valor de a10, porque var no 
                //no sobreescribe el valor de la variable si esta ya tiene uno a nivel global.
//====================================
var alet=1;
let alet=2;
var alet=3;
//====================================

function f11(calabaza){
    let a11=1+calabaza;
    console.log(a11);
}
var calabaza = "calabaza";
f11(calabaza);
//la variable calabaza es global, y la variable calabaza que se pasa a la funcion f11 es local, por lo que no se sobreescribe el valor de la variable global.   

//el let sí se sobreescribe en el if, ya que el var reemplaza el valor de la variable en todo el ambito en la que se la declara, pero el let solo en el ambito en el que se la declara, por lo que si se declara dentro de un if, 
// solo se sobreescribe dentro del if, y fuera del if sigue teniendo el mismo valor que antes.