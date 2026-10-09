// A partir de una cadena CSV, almacenar en un array de forma ordenada.

const cadenaCSV = "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,912323232,81233234H,38012,2145SDC,Marta,87654321Q,23456,4532PLF,671223344,Jose Luis,4567KJL,98765432W";

let esNombre = valor => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(valor) && /[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(valor);
let esDni = valor => /^\d{8}[A-Z]$/i.test(valor);
let esTelefono = valor => /^\d{9}$/.test(valor);
let esCp = valor => /^\d{5}$/.test(valor);
let esCodigo = valor => /^\d{4}[A-Z]{3}$/i.test(valor);

let ordenarFila = (nombre, campos) => {
    let fila = [nombre, "", "", "", ""];

    for (let valor of campos) {
        if (esDni(valor)) fila[1] = valor;
        else if (esTelefono(valor)) fila[2] = valor;
        else if (esCp(valor)) fila[3] = valor;
        else if (esCodigo(valor)) fila[4] = valor;
    }

    return fila;
};

const arrayOrdenado = [];
let nombreActual = null;
let camposActuales = [];

for (let valor of cadenaCSV.split(",")) {
    let celda = valor.trim();

    if (esNombre(celda)) {
        if (nombreActual !== null) {
            arrayOrdenado.push(ordenarFila(nombreActual, camposActuales));
        }
        nombreActual = celda;
        camposActuales = [];
        continue;
    }

    if (nombreActual !== null && (esDni(celda) || esTelefono(celda) || esCp(celda) || esCodigo(celda))) {
        camposActuales.push(celda);
    }
}

if (nombreActual !== null) {
    arrayOrdenado.push(ordenarFila(nombreActual, camposActuales));
}

for (let fila of arrayOrdenado) {
    console.log(fila);
}

