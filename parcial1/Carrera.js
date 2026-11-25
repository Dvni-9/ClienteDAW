export class Carrera{
    carreras = [];
    fechasOcupadas = newSet();

    constructor (nombre, barrio,fecha){
        this.nombre = nombre;
        this.barrio = barrio;
        this.fecha = new Date(fecha);
        this.equipos= new Set();
        this.pilotosInscritos = new Set();
        this.especialidades = new Map();
        this.garajes = new Set();
        this.mapa= new Array({length : 4}, ()=>Array[5].fill("[]"));
        // this.mapa[0],[2]= "P";
        // this.mapa[2],[4] = "P";       

    }
    get nombre(){
        return this.nombre;
    }
    
    get barrio(){
        return this.barrio;
    }
    
    get fecha(){
        return this.fecha;
    }
    get fechaFormateada(){
        return Carrera.formatearFecha(this.fecha);
    }
    static formatearFecha(fecha){
        if(fecha.getDate.length==2){
            dia = this.fecha.getDate;
        }else{
            dia = "0"+fecha.getDate;
        }
    
        if(fecha.getMonth.length==2){
            mes = fecha.getMonth;
        }else{
            mes = "0"+fecha.getMonth;
        }
        if(fecha.getFullYear.length!=4){
            anio = "20"+fecha.getFullYear;
        }else{
            anio = fecha.getFullYear
        }
        return `${dia}/${mes}/${anio}`
    }
    static parsearFecha(fechaString){
        [dia,mes,anio]= fechaString.split("/").map(Number);
        return new Date (anio, mes-1,dia);
    }
    static ultimoSabado(anio,mes){
        this.fecha = new Date (anio,mes +1,0);
        let retroceso = (this.fecha.getDay()+1)%7;
        this.fecha.setDate = (this.fecha.getDate-retroceso);
        return this.fecha;
    }
    static buscarSabado(){//<=======================================pendiente de hacer
        let anio = 2027;
        let mes =0;
        while(true){
            const candidato = Carrera.ultimoSabado(anio,mes);
            if(Carrera.fechasOcupadas){//aquí necesito que compruebe si el candidato ya tiene la caeera ocupada
                return candidato;
            }
            mes++;
            if(mes>11){
                mes=0;
                anio++;
            }
        }
    }
    static registrar(nombre,barrio,fechaString = null){
        let fechaPuesta;
        if(fechaString){
            fechaPuesta=parsearFecha(fechaString);
            const clave = formatearFecha(fechaPuesta);
            if(Carrera.fechasOcupadas.has(clave)){
                console.log(`la fecha ${clave} ya está ocupada`);
                return null
            }
        }else{
            fechaPuesta = this.buscarSabado();
        }
        const carrera = new Carrera(nombre, barrio, fechaPuesta);
        Carrera.fechasOcupadas.add(Carrera.formatearFecha(fechaPuesta));
        Carrera.cerreras.push(carrera);
        return carrera;
    }
    static mostrarCalendario(){
        console.log("CALENDARIO");
        const listado=[...Carrera.carreras]
        .sort((a,b)=>a.barrio.localeCompare(b.barrio)|| a.fecha.getTime()-b.fecha.getTime())
        .map(c=> ({
            Barrio: c.barrio,
            Fecha: c.fecha,
            Nombre: c.nombre
        }))
        console.table(listado);
    }
    static inscribirEquipo(equipo){
        if(this.equipos.has(equipo)){
            console.log("Este equipo ya etsá");
            return false;
        }
        const pilotoRepe = equipo.pilotos.find(p => this.pilotosInscritos.has(p));
        if(pilotoRepe){
            console.log("Hay un piloto que ya está inscrito");
            return false;
        }
        if(equipo.nivelBusqueda>5){
            console.log("Este equipo no puede participar porque le sigue la policía");
            return false;
        }
    }
    static mostrarBarrio(){
        console.table(this.mapa);
    }



}