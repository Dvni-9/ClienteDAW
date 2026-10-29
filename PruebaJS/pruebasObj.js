let consola = [1,2,3,4,5];
let nombres = ['Luis', 'Maria','Marta','Marco','Miguel'];
let edades = [43,55,3,33,14]
let guardar = [];
for(i=0;i<consola.length;i++){
    let propiedades = [`id`,'nombre','edad','trabajador'];
    trabajoB = false;
    if(edades[i]>18){
        trabajoB = true
    }

const valores = [consola[i],nombres[i],edades[i],trabajoB];
const persona = {};
for (const key in propiedades){
    persona[propiedades[key]] = valores[key];
}
guardar[i]= persona;
console.log(persona);
}
console.log(guardar);
//==================================================================
console.log("");
const cliente = {nombre: "Pepe", saldo: 1000, credito: true};
for (const key in cliente){
    console.log(`Propiedad: ${key} Valor: ${cliente[key]}`);
}
console.log("nombre" in cliente);
console.log("apellido" in cliente);
const copia1 = {...cliente};
console.log(copia1);

const copia2 = {apellido: "García", ...cliente};
console.log(copia2);
let copia3 = Object.assign(cliente);
console.log(copia3);

let copia4 = {};
Object.assign(copia4,cliente);
console.log(copia4);
//=================================================================
console.log("");
console.log("");


const person = {name: "Paco", age: 30};
const student = {course: 'A'};
const agenda = {fechado: 'Fichao'}

console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student));
console.log("Estudiante: "+student.name);
console.log("");

Object.setPrototypeOf(student, person);
Object.setPrototypeOf(agenda, student);

console.log("Persona: "+person.name);
console.log("Estudiante: "+student.name);
console.log("Agenda: "+agenda.name);

console.log("");
student.name = 'Pepe';
console.log("Persona: "+person.name);
console.log("Estudiante: "+student.name);
console.log("Agenda: "+agenda.name);
//=================================================================
console.log("");
console.log("");

const person2 = {name: "Camilo", age: 23};
const student2 = Object.create(person2);

student2.course= 'A';
const customer = Object.create(person2);
customer.sales = 12345;
Object.assign(customer,person2);
console.log("Persona2: "+person2);
console.log("Estudiante2: "+student2);
console.log("Customizado: "+customer);

const nuevo = Object.assign({},person2, agenda);
console.log("Nuevo: "+nuevo);
//==================================================================
console.log("");
const persona = {
    visualizar: function (){
        console.log(this);
    }
};
const estudiante = Object.create(persona);
estudiante.nombre = 'Pedro';
estudiante.visualizar();