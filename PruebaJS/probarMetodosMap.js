hola= new Map([]);
mapa = new Map([['clave1', 'valor1'],['clave2', 'valor2']]);
//tenemos dos maneras, uno con el propio constructor y luego usar el set, que es algo iterable
hola.set(1,"valor1");
hola.set("clave1", 5);
hola.set(2,"valor2");
let string = [];
hola.set(string,"valorString");
hola.set(2.19,"valorDecimal");


console.log( hola.get("clave1"));
console.log( hola.get(1));
hola.delete(1);
hola.has(1);
hola.has("clave1");
console.log(hola.values());
console.log(hola.keys());
console.log(hola.entries());
hola.clear();

console.log("");
console.log(mapa.entries())