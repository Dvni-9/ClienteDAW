class Profesor extends Persona {
    constructor(nombre,apellidos,dni,asignaturas){
        super(nombre, apellidos, dni);
        this.asignaturas = asignaturas;
    }
    corregirEjercicio(numEjercicio, nota){
        document.write (`<p>${this.nombre} ha sacado en el ej ${numEjercicio} corregido por ${this.nombre} un ${nota}</p>`);

    }
}