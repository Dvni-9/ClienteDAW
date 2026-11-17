const persona = {
  nombre: 'Pepe',
  apellidos: ['García', 'Peréz'],
  edad: 23
};

const { nombre: ej1, edad: ej2 } = persona;
console.log(ej1, ej2);

const arr = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

const [lu, , mi] = arr;
console.log(lu, mi);

const { apellidos: [apellido1, apellido2] } = persona;
console.log(apellido1, apellido2);

function verDatos({ nombre = 'Luis', edad = 20 } = {}) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

verDatos(persona);
verDatos({ nombre: 'Ana' });
verDatos({ edad: 35 });
verDatos({});
verDatos();