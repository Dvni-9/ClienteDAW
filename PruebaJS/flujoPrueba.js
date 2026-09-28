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

console.log("");
console.log("Más funciones de string");
console.log(pruebillas.startsWith("Este")); // mira si empieza por ese texto
console.log(pruebillas.endsWith("ideo"));
console.log(pruebillas.includes("cleido"));
console.log(pruebillas.match(/e/g)); // devuelve las veces que aparece la e
console.log("Hola ".repeat(2));
console.log(pruebillas.replace("e", "a"));
console.log("  Hola mundo  ".trim()); // quita los espacios de los extremos
console.log("42".padStart(5, "0"));
console.log("42".padEnd(5, "0"));

// También podemos recorrer un string como si fuera un array de caracteres
console.log(pruebillas[0]);
for (const letra of "Sol") {
    console.log(letra);
}

console.log("");
console.log("Objeto global Math");
console.log(Math.PI, Math.E);
console.log(Math.abs(-5));
console.log(Math.sin(0), Math.cos(0), Math.tan(0));
console.log(Math.exp(1), Math.log(Math.E));
console.log(Math.ceil(2.3), Math.floor(2.7), Math.round(2.5));
console.log(Math.pow(2, 3));
console.log(Math.min(4, 1, 7), Math.max(4, 1, 7));
console.log(Math.sqrt(25));
console.log(Math.random()); // número aleatorio entre 0 y 1