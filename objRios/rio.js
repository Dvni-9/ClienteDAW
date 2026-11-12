class Rio {
    constructor(nombre, cuenca) {
        this.nombre = nombre;
        this.cuenca = cuenca;
        this.caudalmedio = null;
        this.poblaciones = [];

        console.log(`nuevo rio ${this.nombre}, de la cuenca: ${this.cuenca}.`);
    }

    agregarPoblacion(poblacion) {
        if (!this.poblaciones.includes(poblacion)) {
            this.poblaciones.push(poblacion);
        }
        console.log(`El rio ${this.nombre} pasa por ${poblacion}.`);
    }

    eliminarPoblacion(poblacion) {
        const indice = this.poblaciones.indexOf(poblacion);

        if (indice !== -1) {
            this.poblaciones.splice(indice, 1);
        }

        console.log(`El rio ${this.nombre} no pasa por ${poblacion}.`);
    }

    modificarCaudalmedio(numero) {
        this.caudalmedio = numero;
    }

    imprimeNombre() {
        return this.nombre;
    }

    imprimeCuenca() {
        return this.cuenca;
    }

    imprimeCaudal() {
        return this.caudalmedio === null ? "no consta" : this.caudalmedio;
    }

    imprimePoblaciones() {
        return this.poblaciones.length === 0 ? "no consta": this.poblaciones.join(", ");
    }

    imprimeRio() {
        return `Nombre: ${this.imprimeNombre()} Cuenca: ${this.imprimeCuenca()}, ` +
            `Caudal medio: ${this.imprimeCaudal()} Poblaciones: ${this.imprimePoblaciones()}`;
    }
}