"use strict";

class Propietario {
    nombre;
    genero;
    miembros;

    constructor(nombre, genero, miembros) {
        this.nombre = nombre;
        this.genero = genero;
        this.miembros = miembros;
    }

    get Nombre() {
        return this.nombre;
    }

    set Nombre(nombre) {
        this.nombre = nombre;
    }

    get Genero() {
        return this.genero;
    }

    set Genero(genero) {
        this.genero = genero;
    }

    get Miembros() {
        return this.miembros;
    }

    set Miembros(miembros) {
        this.miembros = miembros;
    }
}

class Edificio {
    #calle;
    #numero;
    #codigoPostal;
    #plantas;

    constructor(calle = "Sin nombre", numero = 1, codigoPostal = 10000) {
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = [];
        console.log(`Construido nuevo edificio en calle: ${this.#calle}, nº: ${this.#numero}, CP: ${this.#codigoPostal}.`);
    }

    get Calle() {
        return this.#calle;
    }

    set Calle(calle) {
        this.#calle = calle;
    }

    get Numero() {
        return this.#numero;
    }

    set Numero(numero) {
        this.#numero = numero;
    }

    get CodigoPostal() {
        return this.#codigoPostal;
    }

    set CodigoPostal(codigoPostal) {
        this.#codigoPostal = codigoPostal;
    }

    agregaPlantasYPuertas(nPlantas, nPuertas) {
        for (let i = 0; i < nPlantas; i++) {
            let planta = [];
            for (let j = 0; j < nPuertas; j++) {
                planta.push(null);
            }
            this.#plantas.push(planta);
        }
    }

    agregaPropietario(propietario, planta, puerta) {
        if (planta >= 0 && planta < this.#plantas.length && puerta >= 0 && puerta < this.#plantas[planta].length) {
            this.#plantas[planta][puerta] = propietario;
            console.log(`${propietario.Nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
        } else {
            console.log(`No existe la planta ${planta} o la puerta ${puerta}.`);
        }
    }

    imprimePlantas() {
        console.log(`Propietarios del edificio de la calle ${this.#calle}, nº ${this.#numero}:`);
        for (let i = 0; i < this.#plantas.length; i++) {
            for (let j = 0; j < this.#plantas[i].length; j++) {
                if (this.#plantas[i][j] != null) {
                    console.log(`Planta ${i}, puerta ${j}: ${this.#plantas[i][j].Nombre} (${this.#plantas[i][j].Genero}, ${this.#plantas[i][j].Miembros} miembros)`);
                } else {
                    console.log(`Planta ${i}, puerta ${j}: vacío`);
                }
            }
        }
        console.table(this.#plantas);
    }
}

class Inmobiliaria {
    #edificios;

    constructor() {
        this.#edificios = [];
    }

    addEdificio(edificio) {
        this.#edificios.push(edificio);
    }

    getEdificio(calle, numero) {
        for (let i = 0; i < this.#edificios.length; i++) {
            if (this.#edificios[i].Calle == calle && this.#edificios[i].Numero == numero) {
                return this.#edificios[i];
            }
        }
        return null;
    }
}

let edificio1 = new Edificio("Calle Melancolía");

edificio1.agregaPlantasYPuertas(2, 3);

console.warn("Nuevos propietarios");
edificio1.agregaPropietario(new Propietario("Edu", "Hombre", 2), 0, 0);
edificio1.agregaPropietario(new Propietario("Antonio", "Hombre", 1), 0, 1);
edificio1.agregaPropietario(new Propietario("Erik", "Hombre", 3), 0, 2);

edificio1.agregaPropietario(new Propietario("Mayte", "Mujer", 4), 1, 0);
edificio1.agregaPropietario(new Propietario("Mónica", "Mujer", 2), 1, 1);
edificio1.agregaPropietario(new Propietario("Santiago", "Hombre", 3), 1, 2);

edificio1.agregaPlantasYPuertas(1, 2);
edificio1.agregaPropietario(new Propietario("Lucía", "Mujer", 1), 2, 0);
edificio1.agregaPropietario(new Propietario("Carlos", "Hombre", 2), 5, 0);

edificio1.imprimePlantas();

let edificio2 = new Edificio("Calle Mayor", 15, 28013);
edificio2.agregaPlantasYPuertas(1, 2);
edificio2.agregaPropietario(new Propietario("Ana", "Mujer", 2), 0, 0);
edificio2.CodigoPostal = 28014;
console.log(edificio2.CodigoPostal);
edificio2.imprimePlantas();

let inmobiliaria = new Inmobiliaria();
inmobiliaria.addEdificio(edificio1);
inmobiliaria.addEdificio(edificio2);

console.log(inmobiliaria.getEdificio("Calle Melancolía", 1));
console.log(inmobiliaria.getEdificio("Calle Falsa", 99));
