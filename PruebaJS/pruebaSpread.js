// const persona = {nombre: 'Pepe', edad: 27};
// const cliente = {ventas: 120, ...persona};

// console.log(cliente);
// const copiaCliente = {...cliente};
// console.log(copiaCliente);

// persona.nombre="Laura";
// console.log(persona);
// console.log(cliente);
// let cliente2={...cliente};//hay q tener muchísimo cuidado al usar el = en objeto
// persona.nombre="Alberto";
// console.log(persona);
// console.log(cliente);

let letra = "a";
let vocal = letra =>{
    if((letra=="a")||(letra=="e")||(letra=="i")||(letra=="o")||(letra=="u")){
        return true;
    }else{
        return false;
    }(letra="a")(letra="a")(letra="a")
}
if(vocal(letra)){
    console.log("Es vocal");
}else{
    console.log("No es vocal");

}
let a = ['a','b','c'];
a.forEach(function(e){console.log(e)});
a.forEach((e,i,arr)=>{console.log(...arr+": "+i+"=>"+e)});
let b = [1,2,3,4,5];
let resultado = b.map((e,i)=> (e +(1 +b[1])+i));
console.log(resultado);

let resred = b.reduce((e,i)=>(e-i));
console.log(resred);
console.log(b.reduce(ac=>ac));
let resright = b.reduceRight((e,i)=>(e-i));
console.log(resred);

let redfil = b.filter((e)=>{e>2});
console.log("filter"+redfil);
let redev = b.every((e)=>{e>0});
console.log(redev);
let redev2 = b.every((e)=>{e>2});
console.log(redev2);
