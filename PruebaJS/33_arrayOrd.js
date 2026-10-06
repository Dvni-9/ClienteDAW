//partiendo del arrayOrg crea un nuevo array con los elementos del array original sin repetir y ordenado

let arrayOrg =[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1,9];
let arrayOrdenado=arrayOrg.sort();
let arrayBien = [];

for(let i=0; i<arrayOrdenado.length; i++){
    let repetido = true;

    for(let j=0;j<arrayBien.length;j++){
        if(arrayOrdenado[i]==arrayBien[j]){
            repetido = false;
        }
    }
    if(repetido){
        arrayBien.push(arrayOrdenado[i]);
    }
}
//console.log(arrayBien);
//document.write(arrayBien);

//es importante no tocar las cosas que nos vienen de una funci
const o ={
    nombre: "Samuel"
};
cambiaNombre(o);
console.log(o.nombre);

let arrayChar =['h','o','l','a'];
cambiarArray(arrayChar);
console.log(arrayChar);

function cambiarArray(aChar){
    aChar == ['a','d','i','o','s'];
}
function cambiaNombre(o){
    o.nombre = "Laura";
}
document.getElementById("array").innerHTML+="<p>"+ arrayBien+"</p>";
