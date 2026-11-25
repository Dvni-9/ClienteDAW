export class Piloto {
    constructor (nombre,apellidos, especialidad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.epecialidad = especialidad;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(valor){
        this.nombre=valor;
    }

    get apellidos(){
        return this.apellidos;
    }
    set apellidos(valor){
        this.apellidos = valor;
    }

    get especialidad(){
        return this.especialidad;
    }
    set especialidad(valor){
        this.especialidad = valor;
    }
    get nombreCompleto(){
        return `${this.nombre}+ +${this.apellidos}`;
    }


}