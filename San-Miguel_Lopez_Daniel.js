let cadena = "en un lugar de la mancha";
// let cadena_palabras = cadena.join(" ");
//f4 devueñve un string similar al orginal pero sin espacios y en CamelCase
// let f4 = (cadena)=>{
//     var palabras = cadena.trim().split(/\s+/);
//     resultado = [];
//     resultado.push(palabras[0]);

//     for (var i = 1; i < palabras.length; i++) {
//         var palabraModificada = palabras[i]; 
//         resultado.push(palabraModificada[0].toUpperCase());
//         for(var j =1;j <palabraModificada.length; j++){
//                 resultado.push(palabraModificada[j]);
//         }
//     }
//     return resultado.join("");
//     // console.log(resultado.join());



// }
const f4 = (cadena) => cadena-split(" ")
    .map((n)=> n[0].toUppercase() + n.slice(i))
    .reduce((fraseFinal, palabra) => fraseFinal +palabra);



//f5 devuelve la longitud media de las palabras de cada frase
let f5= (cadena)=>{
    var palabras = cadena.trim().split(/\s+/);
    longitudes=[];
    for (var i = 0; i < palabras.length; i++) {
        var palabraAContar = palabras[i]; 
        longitudes.push(palabraAContar.length);
    }
    for(var j = 1; j < palabras.length; j++){
            longitudes[0] +=longitudes[j]
    }
    resultado = longitudes[0]/i;

    return resultado;
}
// f6 devuelve un array con la longitud de cada una de las palabras que contengan la letra "a"
let f6 = (cadena)=>{
    var palabras = cadena.trim().split(/\s+/);
    longitudes=[];
    for (var i = 0; i < palabras.length; i++) {
        var palabraAContar = palabras[i]; 
        longitud=[];
        for(var j = 0; j < palabraAContar.length; j++){
            if(j="a"){
                longitud.push(palabraAContar.length);
            }
        }
        return longitud;
    }


}
console.log("camelCaseado : "+f4(cadena));
console.log("LongitudMedia: "+f5(cadena));
console.log("Longitud"+f6(cadena));