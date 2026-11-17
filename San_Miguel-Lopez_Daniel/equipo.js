"use strict"
export class Equipo{
    id;
    fecha;
    descripcion;
    personal;

    constructor(descripcion,personal,[dias]){
        this.descripcion=descripcion;
        this.personal=personal;
        this.fecha=calcularFecha(dias);
    };

    getId(){
        return this.id;
    };
    getFecha(){
        return this.fecha;
    };
    getDescripcion(){
        return this.descripcion;

    };
    getPersonal(){
        return this.personal;

    };

    calcularDias(dias){
        const hoy= new Date;
        if(hoy.getDay !=30 && hoy.getMonth != 5){
            
        }

    };

}