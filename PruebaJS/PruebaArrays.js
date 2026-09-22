console.log("Arrays");
let lista1 = new Array();
let lista2 = Array();
let lista3 = [];

lista1[0] = 1;
// lista1[1] = 1;
lista1[5] = "pepe";

//aquí declaramos atributos, que van de forma totalmente independiente a las posiciones del array
lista1["nombre"] = "laura";
lista1.nombre2 = "santi"; // esta igual lía menos, pero es lo mismo vaya
let nombre3=9;
lista1[nombre3]=7;//simplemente le dices que en la posición que has definido antes es este valor, no tiene nada vaya, en este caso hemos metido el valor 7 en la POSICIÓN 9


console.log(lista1.length+ " <--longitud de lista1");
for (let i = 0; i < lista1.length; i++) {
    console.log(lista1[i] +" posición "+i);
    // console.log(i);
}

console.log(lista1["nombre"] +" atributo pos1");
console.log(lista1.nombre2 +" atributo pos2");

console.log(Object.keys(lista1));

console.log(Object.keys(lista1).length + " número de atributos");// con esto me saca el número de posiciones + arrays
console.log(Object.keys(lista1).filter(key=>isNaN(key)).length);//aquí utilizamos un filtro para que no coja las posiciones, porque las posiciones son "atributos" con clave numérica 


/* let persona = [];
persona.nombre = Laura;
persona.apellido = Lopez; */

/* for(let i = 0; i < Object.keys(persona).filter(key=>isNaN(key)).length; i++){
    console.log(Object.keys(persona).filter(key=>NaN(key)[i]));
    console.log(persona[Object.keys(persona).filter(key=>NaN(key))]);
} */

