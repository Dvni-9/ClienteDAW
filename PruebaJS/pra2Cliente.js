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

// let CheckLibro = (biblioteca, libro) => biblioteca
// .filter(libro => libro.nombre == libroNombre)
// .map ()






console.log(contieneLibro(BIBLIOTECA, LIBRO1));
console.log(contieneLibro(BIBLIOTECA, LIBRO2));
console.log(contieneLibro(BIBLIOTECA, LIBRO3));
console.log(contieneLibro(BIBLIOTECA, LIBRO4));


