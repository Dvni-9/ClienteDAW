const resultado = document.getElementById("resultado");

function mostrar(etiqueta, valor) {
    resultado.textContent += `${etiqueta}: ${valor}\n`;
}

const rioA = new Rio("Duero", "Atlántica");
const rioB = new Rio("Ebro", "Mediterránea");

mostrar("Nombre de rioA", rioA.imprimeNombre());
mostrar("Cuenca de rioA", rioA.imprimeCuenca());
mostrar("Caudal de rioA", rioA.imprimeCaudal());
mostrar("Poblaciones de rioA", rioA.imprimePoblaciones());
mostrar("Información de rioA", rioA.imprimeRio());

rioB.modificarCaudalmedio(50);
mostrar("Caudal de rioB", rioB.imprimeCaudal());

rioB.agregarPoblacion("Miranda de Ebro");
rioB.agregarPoblacion("Tortosa");
rioB.agregarPoblacion("Valladolid");
mostrar("Poblaciones de rioB", rioB.imprimePoblaciones());

rioB.eliminarPoblacion("Valladolid");
mostrar("Poblaciones de rioB", rioB.imprimePoblaciones());
