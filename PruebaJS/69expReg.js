//a partir de un texto almacenar en 5 arrays diferentes las palabras de una, dos, tres, cuatro, cinco o más de 5 letras

// const texto = 'Con su acuerdo, nosótros y nuestros socios usamos cookies o tecnologias similares para almacenar, acceder y procesar datos personales como su visita en este sitio web. Puede retirar su consentimiento u oponerse al procesamiento de datos basado en intereses legitimos en cualquier momento haciendo clic en Configuracion o en nuestra Politica de Cookies en este sitio web.';
const texto = 'Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.';
const palabrasUnaLetra = [];
const palabrasDosLetras = [];
const palabrasTresLetras = [];
const palabrasCuatroLetras = [];
const palabrasCincoLetras = [];
const palabrasMasCincoLetras = [];

const palabras = texto.match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]+/g);
//^^^^^con esta movida quitamos los signos de puntuación^y espacios y tal al solo recoger letras jeje

for (const palabra of palabras) {
	if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ]$/.test(palabra)) {
		palabrasUnaLetra.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ]{2}$/.test(palabra)) {
		palabrasDosLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ]{3}$/.test(palabra)) {
		palabrasTresLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ]{4}$/.test(palabra)) {
		palabrasCuatroLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ]{5}$/.test(palabra)) {
		palabrasCincoLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ]{6,}$/.test(palabra)) {
		palabrasMasCincoLetras.push(palabra);
	}
}

console.log('Una letra:', palabrasUnaLetra);
console.log('Dos letras:', palabrasDosLetras);
console.log('Tres letras:', palabrasTresLetras);
console.log('Cuatro letras:', palabrasCuatroLetras);
console.log('Cinco letras:', palabrasCincoLetras);
console.log('Más de cinco letras:', palabrasMasCincoLetras);