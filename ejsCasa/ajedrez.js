let tablero = new Array(8)
.fill()
.map(() => new Array(8));

let figura = {
    x: 0,
    y: 0,
    moverA(x, y) {
        this.x = x;
        this.y = y;
    }
};

function FiguraTablero(tipo) {
    this.tipo = tipo;
}
FiguraTablero.prototype = figura;

let tipos = ["K", "Q", "T", "T", "A", "A", "C", "C", "P", "P", "P", "P", "P", "P", "P", "P"];

let figuras = tipos.map(tipo => new FiguraTablero(tipo));

function colocarPieza(figura, tablero) {
    let x = Math.floor(Math.random() * 8);
    let y = Math.floor(Math.random() * 8);

    while (tablero[x][y] !== undefined) {
        x = Math.floor(Math.random() * 8);
        y = Math.floor(Math.random() * 8);
    }

    figura.moverA(x, y);
    tablero[x][y] = figura.tipo;
}

figuras.forEach(FiguraTablero => colocarPieza(FiguraTablero, tablero));

console.table(tablero);
