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
