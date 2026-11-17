"use strict"
export class Equipo{
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion,personal,[dias]){
        this.#id = this.gerenarId();
        this.#descripcion=descripcion;
        this.#personal=personal;
        this.#fecha=calcularFecha(dias);
    };

    get Id(){
        return this.#id;
    };
    get Fecha(){
        return this.#fecha;
    };
    get Descripcion(){
        return this.#descripcion;

    };
    get Personal(){
        return this.#personal;

    };
    toString(){
        return this.#id;
    }; 
    calcularDias(dias){
        const hoy= new Date;
          if (dias !== undefined && dias !== null && !isNaN(dias)) {
            const fechaFin = new Date(hoy);
            fechaFin.setDate(hoy.getDate() + dias);
            return fechaFin;
        } else {
            if(hoy.getMonth()>=8){
                anioFin = hoy.getFullYear() +1;
            } else{
                anioFin = hoy.getFullYear();
            }
            return new Date(anioFin, 6, 30);
        }
    };
    gerenarId(){//X-ZZZ-ddd-mm-yyyy
        let tipo;
        if(this.#personal==true){
            tipo = "P";
        }else{
            tipo = "s";
        }
        let ultimosTres = this.#descripcion.slice(-3);
        let dia = this.#fecha.getDate();
        let mes = this.#fecha.getMonth();
        let anno = this.#fecha.getFullYear();

        return `${tipo}-${ultimosTres}-${dia}-${mes}-${anno}`;

    };
    

}