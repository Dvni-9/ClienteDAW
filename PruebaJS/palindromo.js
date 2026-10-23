// const palindromo = palabra => {
//     let letras = palabra.toLowerCase().split("");

//     return letras.reduce((ac, e, i) => {
//         if (e != letras[letras.length-i-1]) {
//             ac = false;
//         }
//         return ac;
//     }, true);
// };
// esto hecho con reduce

const palindromo = palabra => {
    palabra = palabra.toLowerCase();
    if (palabra.length <= 1) {
        return true;
    }
    if (palabra[0] != palabra[palabra.length - 1]) {
        return false;
    }

    return palindromo(palabra.substring(1, palabra.length -1));
};


palabra = "cocotero";
palabraB = "holaloh"

// let letras = palabra.toLowerCase().split("");
console.log(palindromo(palabra));
console.log(palindromo(palabraB));
