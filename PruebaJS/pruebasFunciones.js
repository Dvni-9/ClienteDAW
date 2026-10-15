let hola = function(nombre){//es lo mismo, solo que aquí llamo a la variable sin nombre
                            //pero al almacenarla en una variable, la puedo invicar igual
    
    
    return `Hola ${nombre}`;
   

}
console.log(hola('Pepe'));


console.log("");

function funcionInFuncion(funcionDentro,parametro){
    funcionDentro(parametro);
}

function adios(nombre){
    console.log(`adios ${nombre}`);
}
// console.log(hola);
funcionInFuncion(function () {adios()},'Laura');




console.log("");

 console.log(noNombrada);//no se puede usar antes de declararla, a no ser que sea con var

// let noNombrada = function(){
//     console.log("Soy una función sin nombre");
// }
var noNombrada = function(){
    console.log("Soy una función sin nombre");
}

console.log("");
console.log("Funciones y parámetross");
console.log("");
function f1(nombre,edad){
    console.log(`${nombre}-${edad}`)
}

// f1('Pepe');
// f1('Pepe',30,'otra movida');
// f1();
let mapa = new Map([['Pepe',30],['María',40],['Hola',2]]);
for(var [clave, valor] of mapa){
    console.log(f1(clave,valor));
}
console.log("");
console.log("Funcion 2");
function f2(nombre,edad){
    console.log(`${arguments[0]}- ${arguments[1]}`)
}
f2('Pepe');
f2('Pepe',30,'otra movida');
f2();

console.log("");
console.log("Funcion suma");

function suma (){
    let resultado =0;
    for (let i=0; i<arguments.length;i++){
        resultado += arguments[i];
    }
    console.log(resultado);
}
suma(1,3,5,2,6,8,4,8,4,2,6,2);

console.log("");
console.log("Funcion 3");

function f3(nombre="Paco", edad){
    console.log(`${nombre}-${edad}`)
}
console.log(f3('Pepe',30));


function suma2(...args){
    let result =0;
    for(const a of args){
        result +=a;
    }
    return result;
}
console.log(suma2());
console.log(suma2(10));
console.log(suma2(10,20));
console.log(suma2(10,20,30));

function apellidosAñadir(nombre,...apellidos){
    let result =nombre;
    console.log(arguments.length);
    console.log(typeof(apellidos));//apellidos es un objeto
    for(const i in apellidos){
        result +=" "+apellidos[i];
    }
    return result;
}
console.log(apellidosAñadir("Pedro"));
console.log(apellidosAñadir("Luis","Ruiz"));
console.log(apellidosAñadir("Ana","Gil","Sanz"));
// entonces arguments es un array de todo lo que se le pasa, no es como

console.log("");
console.log("");
console.log("");
console.log("Valores y copias");
let values = [1,2,3];
console.log(values);
let morevalues = [4,5];
values.push(...morevalues);
console.log("Values:"+values);

let copy=[...values];
console.log("Copy:"+copy);
// copy.push(6,7);
// console.log("Values:"+values);
// values[0]=7;
// console.log("Values:"+values);
// console.log("Copy:"+copy);
copy[0]=6;
// console.log("Values:"+values);
console.log("Values:"+values);
console.log("Copy:"+copy);
let copy2=values;//si lo haces con [...] son independientes, pero si lo haces con solo =, sí se cambia si cambias la copia
copy2[0]=125;
console.log("Values:"+values);
console.log("Copy2ks:"+copy2);

console.log("");
console.log("");
console.log("masvalores");


let other = [0,...morevalues];//si no ponemos los [...], te añade el array como Array, no los propios valores de dentro
console.log(other);




