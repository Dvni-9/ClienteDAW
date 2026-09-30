function validarFecha(fechaTexto) {//esto pa validar fecha
    if (!fechaTexto) {
        return false
    };

    let partesFecha = fechaTexto.split("/");
    if (partesFecha.length !== 3) {
        return false
    };

    let dia = Number(partesFecha[0]);
    let mes = Number(partesFecha[1]);
    let anio = Number(partesFecha[2]);
    let anioCompleto = String(anio);
    if (anioCompleto.length > 1) {//esto por si se mete más de dos cifras para el anio vaya
        return false
    };

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return false
    };
    if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false
    };

    return true;
    
}

//aquí ya preguntamos y printeamos y tal 
let datos = prompt("Introduce el nombre, dos apellidos y tu fecha de nacimiento (dd/mm/aa) separados por comas:").trim();

let datosArr = datos.split(",");
let nombres = ["Nombre", "Primer apellido", "Segundo apellido", "Fecha"];

document.write("<table border='1'>");

for (let i = 0; i < nombres.length; i++) {
    let valor = datosArr[i];

    if (i === 3) {
        let fechaValida = validarFecha(valor);
        document.write("<tr>");
        document.write("<td>" + nombres[i] + "</td>");
        if (fechaValida != false) {//FUNCIONA QUE LOCURA MEDIA HORA PARA ESTO   
                                    //Sirve para que si el número es menor a 100 te suma automáticamente 2000 :3
            let partesFecha = valor.split("/");
            let anio = Number(partesFecha[2]);
            if (anio < 100) {
                partesFecha[2] = Number(2000 + anio);
            }
            document.write("<td>" + partesFecha.join("/") + "</td>");
        } else {
            document.write("<td>" + "Fecha no válida" + "</td>");
        }
        document.write("</tr>");
    } else {
        document.write("<tr>");
        document.write("<td>" + nombres[i] + "</td>");
        document.write("<td>" + valor + "</td>");
        document.write("</tr>");
    }
}

document.write("</table>");//Daniel,SanMiguel,López,06/01/2004