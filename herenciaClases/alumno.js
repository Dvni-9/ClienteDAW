class Alumno extends Persona{
    constructor(nombre,apellidos,dni,asignaturas){
        super(nombre, apellidos, dni);
        this.asignaturas = asignaturas;
        
    }
    entregarEjercicio(numEjercicio,profesor){
        document.write (`<p>${this.nombre} ha entregador el ej ${numEjercicio} a ${profesor.nombre} </p>`);
    }


}