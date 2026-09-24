let frutas = ["manzana", "uva", "melocoton", "manzana", "pera"];

let persona = {
    nombre: "Daniel",
    edad: 22,
    ciudad: "Madrid"
};

for (let fruta in frutas) {
    console.log(fruta + " "+frutas[fruta]);
};



console.log(persona.nombre)

for (let attr in persona) {
    console.log(attr + " " + persona[attr]);//hacerlo con el eval y con el punto, mejor que con corchetes
}


console.log("===of===")

for (let fruta of frutas){
    console.log(fruta)
}; 


for (let clave of Object.keys(persona)) {
    console.log(clave);
}

for (let valor of Object.values(persona)) {
    console.log(valor);
}


console.log("");
console.log("Prueba de funcions de string");
let pruebillas = "Esternocleidomastoideo";
console.log(pruebillas.charAt(2));//t
console.log(pruebillas.substring(0,4));//Este
console.log(pruebillas.split("e"));//lo separa POR el caracter indicado en la cadena, eliminandolo

console.log("");
let minimizao = pruebillas.toLowerCase();//lo lowercaseo para probar que también quita la primera "e"
console.log(minimizao.split("e"));

console.log("");
let array = [];
console.log(pruebillas);
console.log(pruebillas.split("e"));
array[0]=pruebillas.split("e",2);                    
console.log(array[0]);
//probar todas las de math y las de arriba