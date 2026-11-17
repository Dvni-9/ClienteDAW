export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion, personal, dias) {
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#fecha = this.#calcularFecha(dias);
        this.#id = this.#generarId();
    }

    get Id() {
        return this.#id;
    }

    get Fecha() {
        return this.#fecha;
    }

    get Descripcion() {
        return this.#descripcion;
    }

    get Personal() {
        return this.#personal;
    }

    set Descripcion(valor) {
        this.#descripcion = valor;
    }

    set Personal(valor) {
        this.#personal = valor;
    }

    #calcularFecha(dias) {
        const hoy = new Date();
        if (dias !== undefined && dias !== null && !isNaN(dias)) {
            const fechaFin = new Date(hoy);
            fechaFin.setDate(hoy.getDate() + Number(dias));
            return fechaFin;
        } else {
       
            const anioFin = hoy.getMonth() >= 8 ? hoy.getFullYear() + 1 : hoy.getFullYear();
            return new Date(anioFin, 5, 30); 
        }
    }

    #generarId() {
        const tipo = this.#personal ? "P" : "S";
        const ultimosTres = this.#descripcion.slice(-3);
        const dia = this.#fecha.getDate();
        const mes = this.#fecha.getMonth() + 1;
        const anio = this.#fecha.getFullYear();
        return `${tipo}-${ultimosTres}-${dia}/${mes}/${anio}`;
    }

    toString() {
        return this.#id;
    }
}




export class Aula {
    #numero;
    #equipos;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#puestos = filas * columnas;
        this.#equipos = Array.from({ length: filas }, () => Array(columnas).fill(null));
    }

    get Numero() {
        return this.#numero;
    }

    get Equipos() {
        return this.#equipos;
    }

    get Puestos() {
        return this.#puestos;
    }

    set Numero(valor) {
        this.#numero = valor;
    }

    activaEquipo(equipo, fila, columna) {
        if (fila < 0 || fila >= this.#equipos.length || columna < 0) {
            return false;
        }

        if (equipo.Personal) {
            // Para portátiles se permite sobrepasar las columnas fijadas inicialmente, pero no las filas
            if (columna <= this.#equipos[fila].length) {
                this.#equipos[fila].splice(columna, 0, equipo);
                return true;
            }
            return false;
        } else {
            // Para sobremesa debe existir la posición exacta dentro de la matriz
            if (columna < this.#equipos[fila].length) {
                this.#equipos[fila][columna] = equipo;
                return true;
            }
            return false;
        }
    }

    getPosicion(idEquipo) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j] !== null && this.#equipos[i][j].Id === idEquipo) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        let activos = 0;
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j] !== null) {
                    activos++;
                }
            }
        }
        return Math.round((activos / this.#puestos) * 100);
    }
}

export class DptoInformatica {
    #aulas;

    constructor() {
        this.#aulas = new Map();
    }

    get Aulas() {
        return this.#aulas;
    }

    addAula(aula, grupo) {
        if (this.#aulas.has(aula.Numero)) {
            return false;
        }
        this.#aulas.set(aula.Numero, { aula: aula, grupo: grupo });
        return true;
    }

    getUbicacion(idEquipo) {
        for (const [numeroAula, datos] of this.#aulas) {
            const posicion = datos.aula.getPosicion(idEquipo);
            if (posicion !== null) {
                return `Aula número: ${numeroAula} *** Fila: ${posicion[0]} Columna: ${posicion[1]}`;
            }
        }
        return "Equipo desconocido";
    }

    getNEquipos() {
        let total = 0;
        for (const datos of this.#aulas.values()) {
            for (const fila of datos.aula.Equipos) {
                total += fila.length;
            }
        }
        return total;
    }
}

import { Equipo } from "./equipo.js";
import { Aula } from "./aula.js";
import { DptoInformatica } from "./dptoInformatica.js";

const FILAS = 5;
const COLUMNAS = 4;

var dptoNaranco = new DptoInformatica();
const asignaciones = [
    { aula: "213", grupo: "SMR2A" },
    { aula: "214", grupo: "IOF2" },
    { aula: "215", grupo: "DAW2A" },
    { aula: "216", grupo: "SMR1A" },
    { aula: "217", grupo: "DAM1A" },
    { aula: "218", grupo: "DAM2A" },
    { aula: "220", grupo: "IOF1" }
];

asignaciones.forEach((asignacion) => {
    console.log(
        dptoNaranco.addAula(new Aula(asignacion.aula, FILAS, COLUMNAS), asignacion.grupo)
            ? "Se ha insertado el aula " + asignacion.aula
            : "No se ha podido insertar el aula " + asignacion.aula
    );
});

console.log("\n%cRECUENTO TOTAL EQUIPOS dptoNaranco: " + dptoNaranco.getNEquipos() + " equipos--------------------\n", 'background: #FADBD8');

console.log("%cACTIVANDO EQUIPOS DE SOBREMESA QUE SE VAN A USAR...", 'background: #222; color: #bada55');
asignaciones.forEach((asignacion) => {
    let aula = dptoNaranco.Aulas.get(asignacion.aula).aula;
    for (let i = 0; i < FILAS; i++)
        for (let j = 0; j < COLUMNAS; j++)
            aula.activaEquipo(new Equipo("Descripción equipo " + aula.Numero + "-" + i + "-" + j, false), i, j);
});

asignaciones.forEach((asignacion) => {
    console.table(dptoNaranco.Aulas.get(asignacion.aula).aula.Equipos);
    console.log("Porcentaje de ocupación tras asignaciones aula " + asignacion.aula + ":" + dptoNaranco.Aulas.get(asignacion.aula).aula.getPorcentajeOcupacion() + "%");
});

function datosPortatiles() {
    console.log("%cACTIVANDO PORTÁTILES QUE SE VAN A USAR...", 'background: #222; color: #bada55');

    while (true) {
        let aulaDestino = prompt("Aula destino (ej. 220) o 'S' para salir:");
        if (aulaDestino === null || aulaDestino.trim().toUpperCase() === "S") {
            break;
        }

        let descripcion = prompt("Descripción (ej. Portátil FP Básica 2-1):");
        if (descripcion === null || descripcion.trim().toUpperCase() === "S") {
            break;
        }

        let filaStr = prompt("Fila (ej. 2):");
        if (filaStr === null || filaStr.trim().toUpperCase() === "S") {
            break;
        }

        let columnaStr = prompt("Columna (ej. 1):");
        if (columnaStr === null || columnaStr.trim().toUpperCase() === "S") {
            break;
        }

        let diasStr = prompt("Nº días (ej. 30):");
        if (diasStr === null || diasStr.trim().toUpperCase() === "S") {
            break;
        }

        const datosAula = dptoNaranco.Aulas.get(aulaDestino.trim());
        if (!datosAula) {
            console.log(`El aula ${aulaDestino} no existe en el departamento.`);
            continue;
        }

        const fila = parseInt(filaStr, 10);
        const columna = parseInt(columnaStr, 10);
        const dias = diasStr.trim() === "" ? undefined : parseInt(diasStr, 10);

        const portatil = new Equipo(descripcion.trim(), true, dias);
        const insertado = datosAula.aula.activaEquipo(portatil, fila, columna);

        if (insertado) {
            console.log(`Equipo portátil ${portatil.Id} añadido correctamente en ${dptoNaranco.getUbicacion(portatil.Id)}`);
            console.table(datosAula.aula.Equipos);
            console.log(`Porcentaje de ocupación aula ${aulaDestino.trim()}:${datosAula.aula.getPorcentajeOcupacion()}%`);
        } else {
            console.log(`No se ha podido añadir el portátil en fila ${fila}, columna ${columna}.`);
        }
    }
}

datosPortatiles();

console.log("%cEl número total de equipos en el departamento es: " + dptoNaranco.getNEquipos() + " equipos--------------------", 'background: #FADBD8');