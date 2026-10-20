let b = ['a','b'];
let arrayN = b.map((e,i)=>e+i)
console.log(b);
console.log(arrayN);
console.log(typeof(arrayN));
// console.log(b.map(e => e +'x'));
// console.log(b);
// console.log(b.map(e,i => e+i));
// console.log(b);
arrayN.forEach(element =>{
    console.log("buenos días");
    console.log(element)
});
console.log(arrayN);

const c = [10,30,50];
console.log(c.reduce((ac,valor)=>{
    console.log(valor);
    console.log(ac);
    return (ac+valor);
},0));//ac es el acumulador, que en este caso es 10 porque no suma más cosa

console.log("");

const d = [10,30,50];
console.log(d.reduce((ac,valor,i)=>{//i es el índice (empezando en 0 obvio) de el elemento actual, en caso de este bucle es "valr"
    console.log(valor+" "+i);
    console.log(ac);
    return (ac+valor+i);//claro return devuelve la suma en ac, yo también es que soy la hostia
}));

console.log("");

const e = ['a','b','c'];
console.log(e.reduce(paraHacerFelizALaura));
function paraHacerFelizALaura(ac,valor,i){//i es el índice (empezando en 0 obvio) de el elemento actual, en caso de este bucle es "valr"
    console.log(valor+" "+i);
    console.log(ac);
    return (ac+valor+i);//claro return devuelve la suma en ac, yo también es que soy la hostia
}

console.log("");

const f = [10,30,50];
console.log(d.reduce((ac,valor,i)=>{//i es el índice (empezando en 0 obvio) de el elemento actual, en caso de este bucle es "valr"
    console.log(valor+" "+i);
    console.log(ac);
    return (ac+valor+i);//claro return devuelve la suma en ac, yo también es que soy la hostia
},100));

