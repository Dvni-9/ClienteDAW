
import { Piloto } from "./Piloto.js";
import { Carrera } from "./Carrera.js"
import { Equipo } from "./Equipo.js"
Carrera.mostrarBarrio();
const c1= Carrera.registrar ("Noche de Neón","Puerto");
const c2= Carrera.registrar ("Rally del Casino","Centro","27/02/2027");
const c3= Carrera.registrar ("Gran Premio del Puerto","Puerto");
const c4= Carrera.registrar ("Sprint de los muelles","Centro");

Carrera.registrar("Carrera duplicada","Centro","27/02/2027");

Carrera.mostrarCalendario();
const maya = new Piloto("Maya","Cruz Soto","Velocidad");
const leo = new Piloto("Leo","Vargas","Derrape");
const irene = new Piloto("Irene","Molina","Mecánica");
const hugo = new Piloto("Hugo","Sanz","Velocidad");
const sara = new Piloto("Sara","Gil Ramos","Derrape");
const diego = new Piloto("Diego","Páez","Mecánica");

const eq1=new Equipo(maya,leo, "Nadie nos para en Vice City")
eq1.registrarInfraccion("conduccion emeraria");
eq1.registrarPremio(8000);
eq1.registrarPremio(3000);
eq1.registrarPremio(1000);
eq1.registrarPremio(4000);

const eq2=new Equipo(irene,hugo, "Tontos todos menos nosotro")
eq2.registrarInfraccion("saltarse un semáforo");
eq2.registrarInfraccion("exceso de velocidad");
eq2.registrarPremio(8000);
eq2.registrarPremio(3000);
eq2.registrarPremio(1000);
eq2.registrarPremio(4000);

const eq3=new Equipo(sara,diego, "Esprintamos mostro")
eq3.registrarInfraccion("conduccionTemeraria");
eq3.registrarInfraccion("saltarse un semáforo");
eq3.registrarPremio(8000);
eq3.registrarPremio(3000);
eq3.registrarPremio(1000);
eq3.registrarPremio(4000);




