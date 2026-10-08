//a partir de un texto almacenar en 5 arrays diferentes las palabras de una, dos, tres, cuatro, cinco o más de 5 letras

const texto = 'Con su acuerdo, nosótros y nuestros socios usamos cookies o tecnologias similares para almacenar, acceder y procesar datos personales como su visita en este sitio web. Puede retirar su consentimiento u oponerse al procesamiento de datos basado en intereses legitimos en cualquier momento haciendo clic en Configuracion o en nuestra Politica de Cookies en este sitio web.';

const palabrasUnaLetra = [];
const palabrasDosLetras = [];
const palabrasTresLetras = [];
const palabrasCuatroLetras = [];
const palabrasCincoOMasLetras = [];

const palabras = texto.split(/[ ]+/);

for (const palabra of palabras) {
	if (/^[A-Za-zÁÉÍÓÚáéíóúñ]$/.test(palabra)) {
		palabrasUnaLetra.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñ]{2}$/.test(palabra)) {
		palabrasDosLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñ]{3}$/.test(palabra)) {
		palabrasTresLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñ]{4}$/.test(palabra)) {
		palabrasCuatroLetras.push(palabra);
	} else if (/^[A-Za-zÁÉÍÓÚáéíóúñ]{5,}$/.test(palabra)) {
		palabrasCincoOMasLetras.push(palabra);
	}
}

console.log('Una letra:', palabrasUnaLetra);
console.log('Dos letras:', palabrasDosLetras);
console.log('Tres letras:', palabrasTresLetras);
console.log('Cuatro letras:', palabrasCuatroLetras);
console.log('Cinco o más letras:', palabrasCincoOMasLetras);