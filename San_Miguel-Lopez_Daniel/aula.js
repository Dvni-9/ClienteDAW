"use strict"
import { Equipo } from "./equipo.js";
export class aula{
    #numero;
    #equipos = [Equipo];
    #puestos;

    constructor(numero,filas,columnas){
        this.#numero=numero;
        this.#puestos=filas*columnas;
        this.#equipos=Array.from({length: filas}, () => Array(columnas).fill(null));
    };

    get numero(){
        return this.#numero;
    };
    get equipos(){
        return this.#equipos;
    };
    get puestos(){
        return this.#puestos;

    };
    activaEquipo(equipo, fila,columna){
        if(fila <0 || fila >= this.#equipos.length || columna <0){
            return false;
        }
        if(equipo.Personal){
            if(columna <= this.#equipos[fila].length){/*portatiles*/
                this.#equipos[fila].splice(columna, 0, equipo)
                return true
            }
        }else{
            this.#equipos[fila][columna] = equipo;
            return true;
        }
        return false;
    }

    getPosicion(idEquipo){
        for(let i =0;i < this.#equipos.length; i++){
            for(let j =0;j < this.#equipos[i].length; j++){
                if(this.#equipos[i][j]!== null && this.#equipos[i][j].Id===idequipo){
                    return [i][j];
                }
            }
        }
        return null;

    };
    getPorcentajeOcupacion(){
        let activos = 0;
        for(let i =0;i < this.#equipos.length; i++){
            for(let j =0;j < this.#equipos[i].length; j++){
                if(this.#equipos[i][j]!== null){
                    activos ++;
                }
            }
        }
        return ((activos / this.#puestos)*100);
    }; 

};