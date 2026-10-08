// Calcula el día de la semana de tus siguientes 5 cumpleaños.
var diaNacimiento = prompt("Día de nacimiento:");
var mesNacimiento = prompt("Mes de nacimiento:");
const ANIOTOTAL = 5;

var hoy = new Date();
var fechaHoy = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
var anioCumple = hoy.getFullYear();

document.write("Tus próximos 5 cumpleaños son:<br>");
for (var i = 0; i < ANIOTOTAL; i++) {
    var fechaCumple = new Date(anioCumple, mesNacimiento - 1, diaNacimiento);

    if (fechaCumple < fechaHoy) {//esto es por si ya has cumplido este año
        anioCumple++;
        fechaCumple = new Date(anioCumple, mesNacimiento - 1, diaNacimiento);
    }

    document.write(diaNacimiento + "/" + mesNacimiento + "/" + anioCumple + " --- " + nombreDiaSemana(fechaCumple.getDay()) + "<br>");
    anioCumple++;
}
function nombreDiaSemana(dia) {
    var nombres = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return nombres[dia];
}


