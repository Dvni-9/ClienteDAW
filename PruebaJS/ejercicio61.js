var frase = "Esto es un texto para trabajar con cadenas. Se realizará la transformación sobre el mismo. Se emplearán metodos del objeto string";
console.log(frase.length);
console.log(frase.length);


var fraseVueltaLetras = frase.split("");
var fraseVueltaLetras=fraseVueltaLetras.reverse();
var fraseVueltaLetras=fraseVueltaLetras.join("");
console.log(fraseVueltaLetras);
console.log("");
var fraseVueltaPalabras = frase.split(" ");
var fraseVueltaPalabras = fraseVueltaPalabras.reverse();
var fraseVueltaPalabras = fraseVueltaPalabras.join(" ");
console.log(fraseVueltaPalabras);
