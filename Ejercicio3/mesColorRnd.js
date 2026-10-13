let meses = ["Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];

const cuadrado = document.getElementById("mes");
let datosMes = "";
setInterval(function(){window.location.reload();}, 1000);
//=============================================
for (let i = 0; i < meses.length; i++) {
    const mes = meses[i];

    const cordx = Math.random() * 800;
    const cordy = Math.random() * 200;

    let rojo = Math.random() * 256;
    let verde = Math.random() * 256;
    let azul = Math.random() * 256;

    datosMes = datosMes + `<div style="position: absolute; left: ${cordx}px;
     top: ${cordy}px; padding: 8px;
     background-color: rgb(${rojo}, ${verde}, ${azul});">${mes}</div>`;
    cuadrado.innerHTML = datosMes;
}

