const ESTRELLAS_INFRACCION= new Map([
    ["exceso de velocidad",1],
    ["saltarse un semáforo",1],
    ["conducción temeraria",2],
    ["huir de la policía",3]
]);

export class Equipo{
    constructor (piloto1,piloto2,lema){
        this.piloto1 = piloto1;
        this.piloto2 = piloto2;
        this.lema = lema;
        this.infracciones = [];
        this.premios = [];
    }
    get piloto1(){
        return this.piloto1;
    }
    get piloto2(){
        return this.piloto2;
    }
    get lema(){
        return this.lema;
    }
    set lema(valor){
        this.lema= valor;
    }
    get infracciones(){
        return this.infracciones;
    }
    get premios(){
        return this.premios;
    }
    registrarInfraccion(infraccion){
        this.infracciones.push(infraccion);
    }
    registrarPremio(premio){
        rhis.premios.push(premio);
    }

    esValido(piloto1,piloto2,lema){
        return piloto1 && piloto2 && lema.trim
    }
    get nombreEnClave(){
        return [this.piloto1,this.piloto2]
        .map(p=>p.nombreCompleto.trim().split(/\s/).map(w=>w[0].toUppercase()).join(""))
        .sort((a,b)=> a.localeCompare(b))
        .join("&");
    }
    get matricula(){
        return `${this.lema.trim().split(/\s/).map(w=>w.length>0 && w.length %2===0)/*vale hasta aquí es sacar la primera letra de la palabra par */
                .map(w=>w[0].toUppercase()).join("")}-
                ${this.lema.trim().split(/\s+/).filter(w=>w.length>0).length}` //creo q es lo más chapuzas que he hecho, solo por usar los métodos

    }   
    get nivelBusqueda(){
        return Math.min(5, this.infracciones
            .reduce((ac, inf) => 
            ac + (ESTRELLAS_INFRACCION.get(inf))
            ,0));
    }
    get premioNeto(){
        return this.premios
        .reduce((ac, p)=> (p>5000 ? p*0.8:p)
        ,0);
    }
    //esValido(){ <============================================================

    //}
}