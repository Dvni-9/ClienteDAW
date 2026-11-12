//Queremos obtener por la pantalla del navegador una relación de algunas comunidades autónomas y algunas de sus provincias:
//Castilla y León: Valladolid Burgos León Palencia
//Valencia: Valencia Alicante
//Andalucía: Sevilla Córdoba Almería

//a- definir los array necesarios con los datos
//b- recorrer lso arrays para que se muestre lo de arriba
//c- Hacer un recorrido como el del caso anterior, pero mostrándo solo las provincias que empeizan por "V" o "C" y en mayúsculas

//a

const comunidades = ["Castilla y León", "Valencia", "Andalucía"];

const provincias = [
    ["Valladolid", "Burgos", "León", "Palencia"],
    ["Alicante","valencia"],
    ["Sevilla","Córdoba","Almería"]
];

//b


//b
// for (let i = 0; i < comunidades.length; i++) {
//     document.write(comunidades[i] + ": ");
//     for (let j = 0; j < provincias[i].length; j++) {
//         document.write(provincias[i][j] + " ");
//     }
//     document.write("<br>");
// }
// document.write("<h2>Otra manera</h2>");
document.write(comunidades.map((comunidad, i) =>
    " " + comunidad + ": " + provincias[i].join(" ")+"<br>"
).join(""));

//c
document.write("<h1>Ejercicio 3</h1>");
document.write(comunidades.map((comunidad, i) =>
    comunidad + ": " + provincias[i]
        .filter(provincia => /^[VC]/.test(provincia)).join(" ") + "<br>"
));
