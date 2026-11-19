
const profesores = [
    new Profesor('Laura','Cliente','76143519F',['Desarrollo web cliente','Frameworks']),
    new Profesor('Joao','Server','76143819F',['Desarrollo web servidor','Despliegue'])
];

const alumnos = [
    new Alumno('Daniel','SM','71243519F',['Desarrollo web cliente','Despliegue']),
    new Alumno('Mayka','RG','76143989F',['Desarrollo web servidor','Frameworks','Despliegue'])
];
let numEjercicio =1;
alumnos.forEach((alumno) =>{
        profesores.forEach((profesor)=>{
            alumno.entregarEjercicio(numEjercicio,profesor);
            profesor.corregirEjercicio(numEjercicio,(Math.random()*10).toFixed(2));
            numEjercicio++;
        })

})