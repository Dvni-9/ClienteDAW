let nombre = prompt("Introduce el nombre:");
let apellidos = prompt("Introduce los apellidos:");
let edad = prompt("Introduce la edad:");
let email = prompt("Introduce el email:");
let telefono = prompt("Introduce el teléfono:");
let centro = prompt("Introduce el centro:");
let curso = prompt("Introduce el curso:");
let observaciones = prompt("Introduce las observaciones:");
let anio = prompt("Introduce el año:");

/**
Debes crear y utilizar una función llamada comprobar con la siguiente especificación:
* Comprueba si el dato que le pasamos cumple con el patrón
* que también le hemos pasado, además pinta por pantalla * el resultado booleano.
* @param {String} titulo Nombre a mostrar cuando se pinta
* @param {String} dato Dato a comprobar
* @param {RegExp} expr Expresión regular que debe cumplirse.
*/
function comprobar(titulo, dato, expr) { 
    let resultado = expr.test(dato || "");
    document.write("<p>" + titulo + ": " + resultado);
    if (!resultado) {
        document.write("- El campo no cumple con las especificaciones.");
    }
    document.write("</p>");
}

comprobar("Nombre", nombre, /^[A-Z][a-zA-Z]*( [a-zA-Z]+)*$/);
comprobar("Apellidos", apellidos, /^[A-Z][a-zA-Z]*( [a-zA-Z]+)*$/);
comprobar("Edad", edad, /^\d{1,3}$/);
comprobar("Email", email, /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
comprobar("Teléfono", telefono, /^[679]\d{8}$/);
comprobar("Centro", centro, /^[A-Z]*.{5,120}$/);
comprobar("Curso", curso, /^[12]$/);
comprobar("Observaciones", observaciones, /^.{0,120}$/);
comprobar("Año", anio, /^(19\d{2}|20\d{2})$/);