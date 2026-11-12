const array = [1,2,3,4,5,6];
const [numero, orden] = array;

console.log(numero)
console.log(orden)

const [tercero,,cuarto]= array
console.log(tercero)
console.log(cuarto)

const array2 = ['Jose','Pérez',2345678,3456789];
const [nombre,,...telf] = array2;
console.log(telf);
const[nombrado,,,, apellido2='Hector',...tlf]=array2;
console.log(apellido2);
console.log(tlf);

