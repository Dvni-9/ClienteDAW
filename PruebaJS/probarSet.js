// conjunto = new Set([['indice1','valorSet1'],"indice2",["indice3","valorSet3"],4]);
// //no me está añadiendo los valores asociados a los índices, solamente los índices como valores
// console.log(conjunto);
// conjunto.add("elemento");
// conjunto.add("elemento");//añadir un elemento, como valor, sin clave
// //en el caso de ser la misma variable pero de diferente tipo, EJ: 67 y "67", si los añade
// console.log(conjunto);

// console.log("");

// conjunto.delete("elemento");
// conjunto.delete('valorSet1');//solo fuciona con valores obviamente
// conjunto.delete();
// console.log(conjunto);
// console.log("");

// conjunto.has('indice2');
// console.log(conjunto.has('indice2'));
// console.log("");

// conjunto.values();
// console.log(conjunto.values());
// for(let valor of conjunto.values()){//principalmente usar el forof en los sets
//     console.log(valor);
// }
// console.log("")
// console.log("entries");
// for(let valEnt of conjunto.entries()){//aquí devuelve el array 
//     console.log(valEnt);

// }

// console.log("");
// conjunto.clear();//con el clear lo dejo todo a 0, como en el map
// console.log(conjunto);

//la principal diferencia que veo es que en el set no se pueden asociar
//claves a valores, o por lo menos, no de la misma forma, entonces no termino
//de ver cual es la verdadera diferencia con el array
let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];
let outputArray2 = [];
console.log(array.length)

for (let i = 0; i < array.length; i++) {
    if (!outputArray.includes(array[i])) {
        outputArray.push(array[i]);
    }
}
console.log(outputArray);
// const setArray = new Set(array);
outputArray2 = Array.from(new Set(array));
console.log(outputArray2);


