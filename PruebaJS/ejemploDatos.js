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
/* var alet=1;
let alet=2;
var alet=3; */
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

//===================================================================
//======22/09/26=====================================================
//===================================================================
console.log("");
console.log("22/09/26");
console.log("Diferencia entre x++ y ++y");
var inc= 1;
inc++;
console.log(inc+" inc");
var inc1 =1;
++inc1;
console.log(inc1+" inc1");
//la diferencia entre x++ y ++y es que x++ primero devuelve el valor de x y luego lo incrementa, mientras que ++y primero incrementa el valor de y y luego lo devuelve. Esto es útil para las operaciones en las que se necesita el valor antes de incrementarlo, como en los bucles for. 
// Por ejemplo, si queremos recorrer un array y necesitamos el índice actual antes de incrementarlo, podemos usar x++. 
// Si necesitamos el índice incrementado, podemos usar ++y.
console.log("");
console.log("Diferencia entre parseInt y parseFloat");
let dec =parseInt(1.43);
console.log(dec+" dec");
let dec2 = parseInt(1.67);
console.log(dec2+" dec2");
//no redondea, sino que devuelve la parte entera del número, es decir, el número sin decimales.

let dec3 = parseFloat(1.43);
console.log(dec3+" dec3");
let dec4 = parseFloat(1.67);
console.log(dec4+" dec4");
//parseFloat convierte una cadena en un número decimal, redondeando si es necesario.
console.log("");
console.log("Bases numéricas");
let base = 10;
console.log(base+" base");
console.log(base.toString(2)+" base binaria ");
console.log(base.toString(8)+" base octal ");
console.log(base.toString(16)+" base hexadecimal ");
console.log(base.toString()+" base decimal, deja la base por defecto, que es 10");

console.log("");
console.log("Probar eval");
let pruebEval = eval("2+2");
console.log(pruebEval+" pruebaEval");
//eval evalua una cadena como si fuera código JavaScript, y devuelve el resultado de la evaluación. En este caso, evalua la cadena "2+2" y devuelve 4.
let pruebEval2 = eval("2+parseInt(2+4)");
console.log(pruebEval2+" pruebaEval2");
//En este caso, evalua la cadena "2+parseInt(2+4)" y devuelve 8.
let pruebEval3 = eval("console.log('Hola mundo')");
//puedes poner un console.log dentro de un eval, y se ejecuta como si fuera código normal
console.log("");
console.log("Sintaxis de typeof");
let taipof = "1";
let taipof2 = 2;
console.log(typeof taipof, typeof taipof2);
console.log(taipof + taipof2 +" concatenación de string y número");

if(taipof == taipof2){
    console.log(taipof + taipof2);//aquí me lo suma porque cree que es el mismo tipo de dato.
}


if(taipof === taipof2){
    console.log(taipof + taipof2);
}
console.log("");
console.log("Operadores con distintos tipos de datos");
let resta1 = "1";
let resta2 = 2;
console.log(resta1 - resta2 + " resta");//aquí me lo resta porque cree que es el mismo tipo de dato.


let prod = "1";
let prod2 = 2;
console.log(prod * prod2 + " producto");//aquí me lo multiplica porque cree que es el mismo tipo de dato.

let div = "1";
let div2 = 2;
console.log(div / div2 + " división");//aquí me lo divide porque cree que es el mismo tipo de dato.


let restaString = "1";
let restaString2 = "2";
console.log(restaString - restaString2 + " resta de strings");//aquí me lo resta porque cree que es el mismo tipo de dato, aunque sean strings, los convierte a números y los resta.
console.log("")
console.log("booleanos");   
let booleano1 = true;
let booleano2 = false;
console.log(booleano1 + booleano2 + " suma de booleanos");//aquí me lo suma porque cree que es el mismo tipo de dato, aunque sean booleanos, los convierte a números y los suma.
console.log(booleano1 - booleano2 + " resta de booleanos");//aquí me lo resta porque cree que es el mismo tipo de dato, aunque sean booleanos, los convierte a números y los resta.
console.log(true + true + " suma de booleanos");
console.log(false + false + " suma de booleanos");

console.log("")
console.log("Comparaciones especiales"); 
console.log("??", true ==1);
console.log(""==0);
console.log(""==false);
console.log("0"==false);
console.log("0"==0);

console.log("??", true ===1);
console.log("0"===0);
console.log(""===false);
console.log(""===0);


console.log("")
console.log("Arrays");






