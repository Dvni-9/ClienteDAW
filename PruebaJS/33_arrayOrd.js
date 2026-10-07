//partiendo del arrayOrg crea un nuevo array con los elementos del array original sin repetir y ordenado

let arrayOrg =[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1,9];

let arrayBien = [];

for(let i=0; i<arrayOrg.length; i++){
    let repetido = true;

    for(let j=0;j<arrayBien.length;j++){
        if(arrayOrg[i]==arrayBien[j]){
            repetido = false;
        }
    }
    if(repetido){
        arrayBien.push(arrayOrg[i]);
    }
}
arrayBien.sort();
console.log(arrayBien);
//document.write(arrayBien);


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
// document.getElementById("array").innerHTML+="<p>"+ arrayOrdenado+"</p>";
var tablaA =[[1,2,3],[4,5,6],[7,8,9,10],['A','B','C','D']];
console.log(tablaA.length);
console.log(tablaA[0].length);
tablaA.forEach(function (e , i){
    tablaA[i].forEach(function(e, j){
        console.log(tablaA[i][j]);
    });
});

var tablaB = new Array(5);
tablaB.fill(['A','B','C']);//fill nos sirve para crear un array bidimensional a partir de uno unidimensional
console.log(tablaB);
console.log(tablaB[1]);

console.log("")
var tablaC = Array.of([1,2,3],[4,5,6]);
console.log(tablaC);

console.log("")
console.log("Arrayof")
var tablaC = Array.of([1,2,3],[4,5,6],[7,8,9]);
console.log(tablaC[1]);
console.log("=======================")

console.log("")
console.log("Arrayof3")
var tablaD = Array(tablaC,Array(3));
console.log(tablaD[0,[0]]);

console.log("")

for(let i =0; i < tablaC.length; i++){
    // console.log("\n");
    console.log(tablaC[i].join(","));
}

console.log("")

let tablaString = "";
for(let i = 0; i < tablaC.length; i++){
    for(let j = 0; j < tablaC[i].length; j++){
        tablaString += tablaC[i][j];

        if(j < tablaC[i].length -1){//aquí estamos dentro de cada fila, es solo pa quitar las ,
            tablaString += ",";
        }
    }
    tablaString += "\n";
}
console.log(tablaString)


