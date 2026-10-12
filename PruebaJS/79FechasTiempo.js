//ejercicio en javascript que calcule el tiempo transcurrido entre dos fechas, pasarlo a días y luego despasarlo
let cadenaFecha = "2029-12-27";
var fecha = new Date(cadenaFecha);
var hoy = new Date();
var fechaHoy = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());

/* var diasfecha=fecha.getDate();
var mesfecha = fecha.getMonth();
var aniofecha = fecha.getFullYear();

var fechaTotal= diasfecha + (mesfecha*30)+ (aniofecha*365);

var diasHoy=fechaHoy.getDate();
var mesHoy = fechaHoy.getMonth();
var anioHoy = fechaHoy.getFullYear();

var fechaTotalHoy= diasHoy + (mesHoy*30)+ (anioHoy*365); */

var fechaPivote;
if(fecha>fechaHoy){
    fechaPivote= fechaHoy;
    fechaHoy=fecha;
    fecha = fechaPivote;
}

var resultado = fechaHoy - fecha;
var milisegundosPorDia = 1000 * 60 * 60 * 24;
var resultadoDias = Math.floor(resultado / milisegundosPorDia);
var fechaResAnio = Math.floor(resultadoDias / 365);
var diasRestantes = resultadoDias % 365;
var fechaResMes = Math.floor(diasRestantes / 30);//todos los meses tienen 30 días kekw
var fechaResDias = diasRestantes % 30;


console.log("hay de diferencia " + resultadoDias + " días");
console.log("Equivale a " + fechaResAnio + " años, " + fechaResMes + " meses y " + fechaResDias + " días");

