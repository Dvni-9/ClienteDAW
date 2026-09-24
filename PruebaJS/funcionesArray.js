let arrayPrueba = [];
arrayPrueba[0]=1;
arrayPrueba[1]= "Palabra";
arrayPrueba[3]=1;
console.log("Mi array es este: "+ arrayPrueba);

//length
console.log("===length===");
console.log("La longitud de nuestro array es: "+ arrayPrueba.length); // Medimos la cantidad de posiciones que tiene un array, estén o no ocupadas, empezando desde la posición 0

//concat
console.log("");
console.log("===concat===");
let arrayConc = [];
arrayConc[0]= " Concatenado";
console.log("Mis arrays concatenados darían como resultado: "+ arrayPrueba.concat(arrayConc));
console.log("Además podemos ponerle el tipo de dato que queramos: " + arrayConc.concat(" con un String")+ " e incluso varias concatenaciones en la misma vez " + arrayConc.concat(arrayPrueba));

//join
console.log("");
console.log("===join===");
console.log("Para el join simplemente los une, separados por comas por defecto "+ arrayPrueba.join());
console.log("Si añadimos algún caracter en los parentesis del join(), podemos definir qué queremos usar de separador: " + arrayPrueba.join("") +" | "+ arrayPrueba.join("&"));
console.log("Además te lo junta todo como una cadena: "+ typeof(arrayPrueba.join("")));

//pop
console.log("");
console.log("===pop===");
console.log("El pop simplemente nos da el valor de la última posición del array, y lo elimina del array " + arrayPrueba.pop());
console.log("Ahora mi array es solamente "+ arrayPrueba +" y su longitud habrá cambiado "+ arrayPrueba.length);

//push
console.log("");
console.log("===push===");
console.log(arrayPrueba);
console.log("El push nos permite hacer lo contrario al pop, añadir un elemento al final del array, en este caso vamos a añadir el número 5 ")
arrayPrueba.push(5);
console.log(arrayPrueba);
console.log("Además la longitud habrá vuelto a cambiar " + arrayPrueba.length);
console.log("Y puedes añadir más de una cosa:" + arrayPrueba.push("hola", "otra"))
console.log(arrayPrueba);

//shift
console.log("");
console.log("===shift===");
console.log(arrayPrueba);
let primshift = arrayPrueba.shift();
console.log(arrayPrueba);
console.log("Shift es similar al pop, pero en vez de extraer uno del final, lo hace al principio del array: " + primshift);


//unshift
console.log("");
console.log("===unshift===");
console.log(arrayPrueba);
console.log("Es lo contrario al unshift, similar al push, pero al principio del array, y de igual manera nos deja añadir uno o más objetos"
    + arrayPrueba.unshift("hola", "segundo")
);

//reverse
console.log("");
console.log("===reverse===");
console.log(arrayPrueba);
console.log("Nos permite invertir todo el array, de forma que nos queda " + arrayPrueba.reverse());

//sort
console.log("");
console.log("===sort===");
console.log(arrayPrueba);
console.log("Ordena un array, convirtiendo todos los elementos a String y ordenándolos de forma ascendente en UTF-16, por defecto ");
console.log(arrayPrueba.sort());

console.log([6,-2,2,-7,-6].sort(function(a,b){
    return a-b;//Compara, si es negativo, a va antes, si es positivo, b va antes
                //Intercambia "a" y "b" en el array, pero no modifica el array, solamente devuelve otro array
}));

console.log(["platano", "manzana", "melocoton"].sort(function(a,b){
    const orden = { manzana: 1, platano: 2, melocoton: 3 };
    return orden[a] - orden[b];
}));

//indexOf
console.log("");
console.log("===indexOf===");
console.log(arrayPrueba);
console.log("El indexOf nos permite saber en qué posición está un elemento dentro del array " + arrayPrueba.indexOf("segundo"));
console.log("Si no está el elemento en el array, nos devuelve el valor -1: "+ arrayPrueba.indexOf("pantallaOLED"));
console.log("Además, si le añadimos un valor número después del elemento que queremos buscar (separado por una coma),"+
    " nos empieza a contar desde la posicion que le hayamos indicado: "+ arrayPrueba.indexOf("segundo", 3) );
console.log("Además, si hay repetidos, solo coge el primero");


//lastindexOf
console.log("");
console.log("===lastindexOf===");
console.log(arrayPrueba);
console.log("Este nos devuileve la última posición de un elemnto del array, es útil cuando tienes más de un elemento igual en el array");
console.log("Primero vemos que la cadena segundo está en la posición "+ arrayPrueba.lastIndexOf("segundo"));
arrayPrueba.push("segundo");
console.log(arrayPrueba);
console.log("Ahora la última vez que pone la palabra segundo es en la posición "+ arrayPrueba.lastIndexOf("segundo"));


//slice
console.log("");
console.log("===slice===");
console.log(arrayPrueba);
console.log("Este nos devuelve un array nuevo, con los datos dentro del array a partir de la posición que le indiquemos y "+
    "hasta la que le indiquemos. Si utilizamos números negativos, toma la posición del número empezando desde el final del array"+
    arrayPrueba.slice(1));
console.log(arrayPrueba.slice(1,4));
console.log(arrayPrueba.slice(1,-4));
console.log(arrayPrueba.slice(2,-3));
console.log("Dejándo los parámetros vacíos nos devuelve nuestro array íntegro: "+arrayPrueba.slice());

//splice
console.log("");
console.log("===splice===");
console.log(arrayPrueba);
console.log("Lo que nos permite es pasarle 3 parámetros, el primero nos indica la posición en la que vamos a introducir nuestro nuevo elemento al array"+
   ", el segundo es la cantidad de elementos a partir de la posición indicada en el primero que queremos sustituir por nuestros nuevos elementos, "+
   "si este número es mayor al número de elementos a añadir, sustituye los elementos pertinentes, y sustituye por vacío (elimina) el resto"+
   "dejarlo a 0 nos permite simplemente añadirlo sin reemplazar nada. Y el tercero es el nuevo elemento (o elementos) con el que vamos a tratar"+
   arrayPrueba.splice(1,0,"Calavera"));
console.log(arrayPrueba.splice(2,1,"Calavera"));
console.log(arrayPrueba.splice(4,2,"Botijo", "Pinguino"));
console.log(arrayPrueba);







