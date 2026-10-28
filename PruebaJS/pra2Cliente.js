const url = "https://picsum.photos/900/400?random=1";

const LIBRO1 ={
    nombre: "Así es la puta vida",
    color: "Negro",
    autor: "Jordi wild",
    npaginas: 315,
    editorial: "wild editorial",
    forrado: true ,
    Url_cover: url,
    comprar: function(){
        console.log(`Libro del autor ${this.autor} comprado`)
    },
    toString: function() {
        return `${this.nombre} de ${this.autor}; Que tiene ${this.npaginas} páginas; ${this.forrado ? "forrado" : "sin forrar"}. \n`;
    }
}

const LIBRO2 ={
    nombre: "Crimen y castigo",
    color: "Blanco",
    autor: "Fyodor Dostoyevski",
    npaginas: 400,
    editorial: "Casablanca",
    forrado: false ,
    Url_cover: url,
    comprar: function(){
        console.log(`Libro del autor ${this.autor} comprado`)
    },
    toString: function() {
        return `${this.nombre} de ${this.autor}; Que tiene ${this.npaginas} páginas; ${this.forrado ? "forrado" : "sin forrar"}.\n`;
    }
}
const LIBRO3 ={
    nombre: "Super Humor XI",
    color: "Rojo",
    autor: "Ibañez",
    npaginas: 100,
    editorial: "Ekisde",
    forrado: true ,
    Url_cover: url,
    comprar: function(){
        console.log(`Libro del autor ${this.autor} comprado`)
    },
    toString: function() {
        return `${this.nombre} de ${this.autor}; Que tiene ${this.npaginas} páginas; ${this.forrado ? "forrado" : "sin forrar"}.\n`;
    }
}
const LIBRO4 ={
    nombre: "Libro ejemplo",
    color: "Verde",
    autor: "Ejemplo Ejemplez",
    npaginas: 125,
    editorial: "Editorial Ejemplo",
    forrado: false ,
    Url_cover: url,
    comprar: function(){
        console.log(`Libro del autor ${this.autor} comprado`)
    },
    toString: function() {
        return `${this.nombre} de ${this.autor}; Que tiene ${this.npaginas} páginas; ${this.forrado ? "forrado" : "sin forrar"}.\n`;
    }
}
//crear un array biblioteca que represente una biblioteca y muestrala con console.log 8automáticamente que use el método toString)

const BIBLIOTECA = [LIBRO1, LIBRO2, LIBRO4];
console.log(BIBLIOTECA.toString());

//recorre los libros de la bibliteca con for..of y muestra las editoriales
for( let libro of BIBLIOTECA){
    console.log(libro.editorial);
}

BIBLIOTECA.forEach((libro) => {console.log(libro.editorial);});

//funcion flecha que devuelve true si el número de páginas del libro que se le pasa es mayor a 150

// let paginas = (libro) =>{
//     if(libro.npaginas >150){
//         return true;
//     }else{
//         return false
// }};
 let CheckPages = (libro) => libro.npaginas >150; //lo mismo que la de arriba pero en una sola línea


console.log(CheckPages(LIBRO1));
console.log(CheckPages(LIBRO2));
console.log(CheckPages(LIBRO3));
console.log(CheckPages(LIBRO4));
console.log("");
// TRABAJA SOLO  a partir de la línea 38, haz una funcion que pasándole la biblioteca y un libro, devuelve true si la biblioteca contiene ese título

let contieneLibro = (biblioteca, libro) => {
    for (let libroBiblioteca of biblioteca) {
        if (libroBiblioteca.nombre === libro.nombre) {
            return true;
        }
    }
    return false;
};


console.log("");
let CheckLibro = (biblioteca, libro) => biblioteca.find(libroBiblioteca => libroBiblioteca.nombre === libro.nombre)? true : false;
console.log(CheckLibro(BIBLIOTECA, LIBRO1));
console.log(CheckLibro(BIBLIOTECA, LIBRO3));
    //biblioteca.some(libro=>libro.nombre ==nombreLibro)
// .filter(libro => libro.nombre == libroNombre)
// .map()
console.log("");

console.log(contieneLibro(BIBLIOTECA, LIBRO1));
console.log(contieneLibro(BIBLIOTECA, LIBRO2));
console.log(contieneLibro(BIBLIOTECA, LIBRO3));
console.log(contieneLibro(BIBLIOTECA, LIBRO4));

console.log("");
//usa el spread operator ... para añadir a la biblioteca el libro que hay sin agregar (LIBRO 3) junto a los 3 que ya tiene
 
// BIBLIOTECA=[...BIBLIOTECA,LIBRO3];

//usar la funcion checkPages en el método filter para obtener un nuevo array LibrosLargos que contenga libros con páginas >150

console.log("ESTE");
let LibrosLargos = BIBLIOTECA.filter(libro =>CheckPages(libro));
console.log(LibrosLargos.toString());

console.log("");

function CheckPages2(libro){ return libro.npaginas > 150;
    // if(libro.npaginas > 150){
    //     return true;
    // }else{
    //     return false;
    // }
} 
// var CheckPages = (libro) => libro.npaginas >150; //lo mismo que la de arriba pero en una sola línea

// function librosLargos2(BIBLIOTECA){
//     let arrayLibros=new Array();
//     for(i=0;i<BIBLIOTECA.length;i++){
        
//         if(CheckPages(BIBLIOTECA[i])){
//             arrayLibros.push(BIBLIOTECA[i]);
//         }
//     }
//     return arrayLibros;
// }
// // let librosLargos3 = (BIBLIOTECA)=> 
// function librosLargos3(BIBLIOTECA){
//     return BIBLIOTECA.filter(libro => libro.npaginas>150);
// }
// function librosLargos4(BIBLIOTECA){
    
//     return BIBLIOTECA.map(libro => console.log(libro));
// }
// console.log(CheckPages2(LIBRO1));
// console.log(librosLargos2(BIBLIOTECA));
// console.log("");
// console.log(librosLargos4(BIBLIOTECA));

// // BIBLIOTECA.filter()
// //recibe un autor y la biblioteca , y usa el método find para devolver un libro de dicho autor
// console.log("");
// console.log("");

let checkAutor=(autor,BIBLIOTECA)=>
    BIBLIOTECA.find((libro) => libro.autor === autor);

console.log("");
console.log(checkAutor("Ejemplo Ejemplez", BIBLIOTECA));

//usar el operador ternario para comprobar si en la biblioteca hay libros de tolkien
console.log("");
console.log(checkAutor("Tolkien", BIBLIOTECA)? true: false);
//ForraLibro funcion flecha que recibiendo la biblioteca pone a true el campo forrado de todo los libros que contiene
let ForraLibro = (BIBLIOTECA)=> {
    BIBLIOTECA.forEach((libro) => {
        libro.forrado = true;
    });
};
// let ForraLibro2 = (BIBLIOTECA)=> BIBLIOTECA.map(libro => libro.forrado(true));
//Prestar libro recibe la biblioteca y el título del libro y lo borra del array en caso de encontrarlo, hazlo con splice

let PrestarLibro = (biblioteca, titulo) => {
    let indice = biblioteca.findIndex((libro) => libro.nombre === titulo);
    if (indice !== -1) {
        biblioteca.splice(indice, 1);//encontrar la manera de quitar el if, hacerlo solo con findex y splice
    }
};
//Devolver libro recibe la biblioteca y el libro y mete el libro en el array de biblioteca
let DevolverLibro = (biblioteca, libro) => {
    biblioteca.push(libro);
};