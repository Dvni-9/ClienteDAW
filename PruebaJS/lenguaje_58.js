// Ejercicio de cadenas: Dado un texto, modificar las palabras para alternar
// palabras en mayúsculas con palabras en minúsculas

function alternarMayusMinus(texto) {
    var palabras = texto.trim().split(/\s+/);
    var resultado = [];

    for (var i = 0; i < palabras.length; i++) {
        var palabraNormalizada = palabras[i].toLowerCase();

        if (i % 2 === 0) {//basicamente siempre la pone en minúscula, y si es par la cambia a mayuscula jeje
                        //es el pico de la ineficiencia pero no se me ocurre na más aparte lo he hecho en 10 min :P
            resultado.push(palabraNormalizada.toUpperCase());
        } else{
            resultado.push(palabraNormalizada);

        }
    }

    return resultado.join(" ");
}

const textoOriginal = "O dios en Antonio Lobato, quieres saber cuánto vale tu coche";
console.log(`original: ${textoOriginal}`);
console.log(`alternado: ${alternarMayusMinus(textoOriginal)}`);


