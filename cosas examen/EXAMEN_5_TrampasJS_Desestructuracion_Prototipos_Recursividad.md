# 🧠 EXAMEN 5 (resuelto) — "¿Qué imprime?", desestructuración, prototipos y recursividad

> **Qué entra:** `var/let`, hoisting, truthy/falsy, coerción, `sort`, copias, iteradores, arrow functions, `Date`, desestructuración (arrays/objetos/anidada/parámetros), objetos y prototipos, función constructora, recursividad.
> **Dificultad:** ⭐⭐⭐ (teoría aplicada: aquí se cae la gente que "solo copia") · **Tiempo:** 60–75 min.
> **Por qué cae:** son las diapositivas de `02_LaSintaxis` (var/let/typeof/coerción), `03_Desestructuración` (`ej4.js`), `03_Objetos` (prototipos, ajedrez) y los ejercicios de `palindromo.js`, `par.js`, `factorial.js`, `fibonacci.js`.

---

## 📝 ENUNCIADO

### BLOQUE A — 12 preguntas: ¿qué sale por consola y por qué?
1. `{ var a = 1; let b = 2; }` y una IIFE con `var s`: ¿qué valen `a`, `typeof b` y `typeof s` fuera?
2. `typeof x` **antes** de `var x = 5;` y `x` después.
3. Llamar a una función **nombrada** y a una anónima guardada con `var` **antes** de declararlas.
4. Usar una variable `let` antes de su declaración.
5. `Boolean(...)` de `"0"`, `"false"`, `[]`, `{}`, `0`, `""`, `null`, `undefined`, `NaN`.
6. `"1"+2` · `"5"-2` · `true+true` · `"0"==0` · `"0"===0` · `""==false` · `typeof null` · `typeof []` · `typeof NaN`.
7. `x++` frente a `++y` (ambos empiezan en 5).
8. `[100,25,3].sort()` frente a `.sort((a,b)=>a-b)`.
9. Copiar con `=` frente a copiar con `[...a]`, y modificar ambas.
10. Recorrer **dos veces** con `for..of` el mismo iterador `["a","b"].keys()`.
11. `filter(e => { e > 2 })` frente a `filter(e => e > 2)`.
12. `new Date(2026, 5, 30)`: `getMonth()`, `getDate()` y `getDay()`.

### BLOQUE B — Desestructuración
Con `[10,20,30,40,50]` extrae el 1.º, el 3.º y el resto; da un valor por defecto a un 3.er elemento inexistente; intercambia dos variables. Con un objeto `persona` (`nombre`, `pais` indefinido, `edad`, `direccion: {ciudad, cp}`, `notas: []`): renombra `nombre` a `alias` y da `"España"` por defecto a `pais`; desestructura sobre **variables ya existentes**; extrae `ciudad`, la primera nota y el resto de forma **anidada**; y crea `verDatos` que desestructura sus parámetros con valores por defecto y se pueda llamar sin argumentos.

### BLOQUE C — Objetos y prototipos
Crea un objeto con **propiedades calculadas**. Crea `perro` como objeto **delegado** de `animal` (`Object.create`), sombrea un método y diferencia propiedades **propias y heredadas**. Crea la función constructora `Personaje(nombre, vida)` con el método `recibirDanio(n)` **en el prototipo**, y coloca 5 personajes en un tablero 5×5 **sin colisiones**.

### BLOQUE D — Recursividad
`esPalindromo(s)`, `factorial(n)`, `fibonacci(n)` (recursivo y con `reduce`), `esPar(n)` (también con negativos) y `sumaArray(arr)`.

---

## 🧭 GUÍA DE TRADUCCIÓN Y RESPUESTAS RAZONADAS

### Bloque A — qué sale y POR QUÉ

| # | Resultado | Por qué |
|---|---|---|
| 1 | `a = 1`, `typeof b = "undefined"`, `typeof s = "undefined"` | `var` **se escapa del bloque** `{}`; `let` no. `s` vive solo dentro de la IIFE (función). |
| 2 | `"undefined"` y `5` | **Hoisting:** la *declaración* de `var` sube arriba, el *valor* no. |
| 3 | `"ok"` y `TypeError` | La función **nombrada** se puede llamar antes. La anónima en `var` existe pero vale `undefined` → "is not a function". |
| 4 | `ReferenceError` | `let` está en la **zona muerta temporal** hasta su línea. (Con `var` sería `undefined`.) |
| 5 | `true,true,true,true,false,false,false,false,false` | **Solo 6 falsy:** `0`, `NaN`, `""`, `false`, `null`, `undefined`. `"0"`, `"false"`, `[]`, `{}` son **truthy**. |
| 6 | `"12"`, `3`, `2`, `true`, `false`, `true`, `"object"`, `"object"`, `"number"` | `+` con texto **concatena**; `-` **convierte a número**; `true`=1; `==` convierte, `===` no; `typeof null` es un bug histórico; los arrays son objetos. |
| 7 | `a=5, x=6, b=6, y=6` | `x++` **devuelve y luego suma**; `++y` **suma y luego devuelve**. |
| 8 | `[100,25,3]` y `[3,25,100]` | Sin comparador ordena **como texto** (`"100" < "25" < "3"`). |
| 9 | `a=[99,2,3]`, `copia=[1,77,3]` | `=` copia la **referencia** (mismo array); `[...a]` crea otro independiente. |
| 10 | `[0,1]` y `[]` | Un iterador **se consume**: en la 2.ª pasada ya está al final. |
| 11 | `[]` y `[3,4]` | Con `{}` hay que escribir `return`; sin él la función devuelve `undefined` (falsy). |
| 12 | `5`, `30`, `2` | Mes **5 = junio** (0–11); `getDate` = día del mes; `getDay` = día de la semana (2 = martes). |

### Bloques B, C, D — frases clave

| El enunciado dice… | Se escribe… |
|---|---|
| "extrae el 1.º y el 3.º" | `const [primero, , tercero, ...resto] = arr;` (la coma vacía **salta**) |
| "valor por defecto" | `const [a, b, c = "x"] = arr;` / `{ pais = "España" }` |
| "intercambia" | `[a, b] = [b, a];` |
| "renombra" | `const { nombre: alias } = persona;` (la variable `nombre` **no** se crea) |
| "sobre variables ya existentes" | **sin** `const` y **entre paréntesis**: `({ edad } = persona);` |
| "anidada" | `const { direccion: { ciudad }, notas: [primera, ...otras] } = persona;` |
| "en los parámetros… sin argumentos" | `function f({ nombre = "x" } = {}) {}` (el `= {}` final) |
| "propiedades calculadas" | `{ [clave]: valor, ["plaza" + 1]: 5 }` |
| "delegado de" | `const perro = Object.create(animal);` |
| "propias o heredadas" | `Object.hasOwn(obj, k)` · `Object.keys(obj)` (solo propias) · `for..in` (también heredadas) |
| "método en el prototipo" | `Personaje.prototype.recibirDanio = function (n) {…}` (compartido por todos) |
| "sin colisiones" | `do { … } while (tablero[x][y] !== null);` |
| "recursividad" | **caso base** (para) + llamada con un problema **más pequeño** |

**⚠️ Trampas escondidas**
1. En el Bloque A, `typeof` de una `let` en zona muerta también lanza `ReferenceError`: si en el ámbito exterior hay un `let b` declarado **más abajo**, un `typeof b` dentro de una función que lo usa antes de tiempo peta. No reutilices nombres de variables entre ejercicios del mismo fichero.
2. `({ a } = obj)` sin paréntesis es un **error de sintaxis** (`{` se toma como bloque).
3. En `prototype` solo se puede asignar en **funciones constructoras**, no en objetos literales; y la flecha **no sirve** de constructor (`new` falla).
4. Una función recursiva sin caso base → `RangeError: Maximum call stack size exceeded`.
5. `fibonacci(n)` recursivo es exponencial: con `n = 40` ya tarda; con `reduce` es instantáneo.
6. `esPar(-3)` sin `Math.abs` no termina nunca (`-3, -5, -7…`).

---

## ✅ SOLUCIÓN COMPLETA

### `examen5.js`
```js
"use strict";

// Ayudante: ejecuta cada pregunta y muestra el resultado (o el error que lanza)
function pregunta(n, titulo, fn) {
    let resultado;
    try { resultado = JSON.stringify(fn()); } catch (e) { resultado = "ERROR " + e.constructor.name; }
    console.log(`${String(n).padStart(2)}) ${titulo} → ${resultado}`);
}

console.log("================ BLOQUE A: ¿Qué sale y por qué? ================");

pregunta(1, "var / let / IIFE", () => {
    { var a = 1; let b = 2; }
    (function () { var s = "dentro"; })();
    return [a, typeof b, typeof s];
});
pregunta(2, "hoisting de var", () => {
    const r = [];
    r.push(typeof x);
    var x = 5;
    r.push(x);
    return r;
});
pregunta(3, "función nombrada vs anónima", () => {
    const r = [];
    r.push(nombrada());
    try { anonima(); } catch (e) { r.push(e.constructor.name); }
    function nombrada() { return "ok"; }
    var anonima = function () { };
    return r;
});
pregunta(4, "let antes de declarar (zona muerta)", () => {
    try { y; } catch (e) { return e.constructor.name; }
    let y = 1;
});
pregunta(5, "Boolean() de...", () =>
    ["0", "false", [], {}, 0, "", null, undefined, NaN].map(Boolean));
pregunta(6, "coerción", () =>
    ["1" + 2, "5" - 2, true + true, "0" == 0, "0" === 0, "" == false, typeof null, typeof [], typeof NaN]);
pregunta(7, "x++ y ++y", () => {
    let x = 5; const a = x++;
    let y = 5; const b = ++y;
    return [a, x, b, y];
});
pregunta(8, "sort sin y con comparador", () =>
    [[100, 25, 3].sort(), [100, 25, 3].sort((a, b) => a - b)]);
pregunta(9, "referencia vs copia", () => {
    const a = [1, 2, 3]; const ref = a; const copia = [...a];
    ref[0] = 99; copia[1] = 77;
    return [a, copia];
});
pregunta(10, "iterador consumido", () => {
    const it = ["a", "b"].keys(); const r1 = [], r2 = [];
    for (const k of it) r1.push(k);
    for (const k of it) r2.push(k);
    return [r1, r2];
});
pregunta(11, "flecha con {} sin return", () =>
    [[1, 2, 3, 4].filter(e => { e > 2; }), [1, 2, 3, 4].filter(e => e > 2)]);
pregunta(12, "Date(2026, 5, 30)", () => {
    const f = new Date(2026, 5, 30);
    return [f.getMonth(), f.getDate(), f.getDay()];
});

console.log("\n================ BLOQUE B: Desestructuración ================");
const [primero, , tercero, ...resto] = [10, 20, 30, 40, 50];
console.log("array:", primero, tercero, resto);
const [p1, p2, p3 = "por defecto"] = ["a", "b"];
console.log("default:", p1, p2, p3);
let izq = 1, der = 2;
[izq, der] = [der, izq];
console.log("intercambio:", izq, der);

const persona = {
    nombre: "Pepe", pais: undefined, edad: 23,
    direccion: { ciudad: "León", cp: 24001 },
    notas: [7, 8, 9]
};
const { nombre: alias, pais: country = "España" } = persona;
console.log("renombrar + default:", alias, country, "| 'nombre' existe:", typeof nombre);
let edad, cp;
({ edad, direccion: { cp } } = persona);              // sobre variables existentes: SIN const y con paréntesis
console.log("existentes:", edad, cp);
const { direccion: { ciudad }, notas: [primera, ...otras] } = persona;
console.log("anidada:", ciudad, primera, otras);
function verDatos({ nombre = "Daniel", edad = 22 } = {}) {   // el = {} permite verDatos() sin argumentos
    return `Nombre: ${nombre}, Edad: ${edad}`;
}
console.log(verDatos(persona), "|", verDatos({ nombre: "Ana" }), "|", verDatos());

console.log("\n================ BLOQUE C: Objetos y prototipos ================");
const clave = "color";
const coche = { [clave]: "rojo", ["plaza" + 1]: 5 };           // propiedades calculadas
console.log(coche);

const animal = { patas: 4, sonido() { return "..."; } };
const perro = Object.create(animal);                           // perro delega en animal
perro.nombre = "Toby";
perro.sonido = () => "guau";                                   // sombrea el método heredado
console.log("proto es animal:", Object.getPrototypeOf(perro) === animal);
console.log("patas (heredada):", perro.patas, "| sonido (propio):", perro.sonido(), "| animal.sonido:", animal.sonido());
for (const k in perro) console.log(`  for..in ${k} → ${Object.hasOwn(perro, k) ? "propia" : "heredada"}`);
console.log("Object.keys (solo propias):", Object.keys(perro));
const gato = {};
Object.setPrototypeOf(gato, animal);
console.log("gato.patas:", gato.patas);

function Personaje(nombre, vida) {                             // función constructora: Mayúscula + new
    this.nombre = nombre;
    this.vida = vida;
}
Personaje.prototype.recibirDanio = function (n) {              // método COMPARTIDO (no se copia en cada objeto)
    this.vida = Math.max(0, this.vida - n);
    return this.vida;
};
const heroe = new Personaje("Link", 100);
console.log("daño 30 →", heroe.recibirDanio(30), "| daño 90 →", heroe.recibirDanio(90));
console.log("método compartido:", heroe.recibirDanio === new Personaje("Zelda", 50).recibirDanio);

const tablero = Array.from({ length: 5 }, () => Array(5).fill(null));
for (const nom of ["A", "B", "C", "D", "E"]) {
    let x, y;
    do { x = Math.floor(Math.random() * 5); y = Math.floor(Math.random() * 5); }
    while (tablero[x][y] !== null);                            // repetir hasta casilla libre
    tablero[x][y] = new Personaje(nom, 100).nombre;
}
console.table(tablero);

console.log("\n================ BLOQUE D: Recursividad ================");
const esPalindromo = s => {
    s = s.toLowerCase();
    if (s.length <= 1) return true;                            // caso base
    if (s[0] !== s[s.length - 1]) return false;                // caso base
    return esPalindromo(s.slice(1, -1));                       // problema más pequeño
};
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
const fibonacciSerie = n => Array(n).fill(0).reduce((ac, _, i) => {
    ac.push(i < 2 ? i : ac[i - 1] + ac[i - 2]);
    return ac;
}, []);
const esPar = n => { n = Math.abs(n); return n === 0 ? true : n === 1 ? false : esPar(n - 2); };
const sumaArray = arr => arr.length === 0 ? 0 : arr[0] + sumaArray(arr.slice(1));

console.log("palíndromo:", esPalindromo("Cocotero"), esPalindromo("Ana"), esPalindromo("holaloh"));
console.log("factorial(5):", factorial(5), "| factorial(8):", factorial(8));
console.log("fibonacci(10):", fibonacci(10), "| serie(10):", fibonacciSerie(10));
console.log("esPar:", esPar(6), esPar(7), esPar(-4), esPar(-3));
console.log("sumaArray:", sumaArray([1, 2, 3, 4, 5]), "| con reduce:", [1, 2, 3, 4, 5].reduce((ac, x) => ac + x, 0));
```

---

## 🖥️ SALIDA ESPERADA
(El tablero del Bloque C usa posiciones aleatorias: las letras cambian de sitio, pero siempre hay 5 y ninguna se pisa.)

```text
================ BLOQUE A: ¿Qué sale y por qué? ================
 1) var / let / IIFE → [1,"undefined","undefined"]
 2) hoisting de var → ["undefined",5]
 3) función nombrada vs anónima → ["ok","TypeError"]
 4) let antes de declarar (zona muerta) → "ReferenceError"
 5) Boolean() de... → [true,true,true,true,false,false,false,false,false]
 6) coerción → ["12",3,2,true,false,true,"object","object","number"]
 7) x++ y ++y → [5,6,6,6]
 8) sort sin y con comparador → [[100,25,3],[3,25,100]]
 9) referencia vs copia → [[99,2,3],[1,77,3]]
10) iterador consumido → [[0,1],[]]
11) flecha con {} sin return → [[],[3,4]]
12) Date(2026, 5, 30) → [5,30,2]

================ BLOQUE B: Desestructuración ================
array: 10 30 [ 40, 50 ]
default: a b por defecto
intercambio: 2 1
renombrar + default: Pepe España | 'nombre' existe: undefined
existentes: 23 24001
anidada: León 7 [ 8, 9 ]
Nombre: Pepe, Edad: 23 | Nombre: Ana, Edad: 22 | Nombre: Daniel, Edad: 22

================ BLOQUE C: Objetos y prototipos ================
{ color: 'rojo', plaza1: 5 }
proto es animal: true
patas (heredada): 4 | sonido (propio): guau | animal.sonido: ...
  for..in nombre → propia
  for..in sonido → propia
  for..in patas → heredada
Object.keys (solo propias): [ 'nombre', 'sonido' ]
gato.patas: 4
daño 30 → 70 | daño 90 → 0
método compartido: true
┌─────────┬──────┬──────┬──────┬──────┬──────┐
│ (index) │ 0    │ 1    │ 2    │ 3    │ 4    │
├─────────┼──────┼──────┼──────┼──────┼──────┤
│ 0       │ 'A'  │ null │ null │ null │ 'E'  │
│ 1       │ null │ null │ null │ null │ null │
│ 2       │ null │ null │ null │ 'D'  │ null │
│ 3       │ null │ null │ null │ null │ null │
│ 4       │ null │ null │ 'C'  │ 'B'  │ null │
└─────────┴──────┴──────┴──────┴──────┴──────┘

================ BLOQUE D: Recursividad ================
palíndromo: false true true
factorial(5): 120 | factorial(8): 40320
fibonacci(10): 55 | serie(10): [
  0, 1,  1,  2,  3,
  5, 8, 13, 21, 34
]
esPar: true false true false
sumaArray: 15 | con reduce: 15
```

**Comprobaciones:** palíndromos `false, true, true` (`"Cocotero"` no lo es) · `factorial(8) = 40320` · `fibonacci(10) = 55` · `esPar(-3) = false` · `for..in` muestra primero las **propias** (`nombre`, `sonido`) y después la **heredada** (`patas`) y `Object.keys` solo las propias.

---

## 🔁 Más preguntas típicas de "¿qué imprime?"
- `console.log(0.1 + 0.2 === 0.3)` → `false` (decimales binarios) · `console.log([] + [])` → `""` · `[10, 9, 1].sort()` → `[1, 10, 9]`.
- `const a = [1,2,3]; a.push(4);` ✅ (la `const` no se reasigna, **pero muta**) · `a = []` ❌ `TypeError`.
- `parseInt("12px")` → `12` · `Number("12px")` → `NaN` · `parseInt(1.99)` → `1` (trunca).
- `typeof typeof 1` → `"string"` · `"b" + "a" + +"a" + "a"` → `"baNaNa"`.
- `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i))` → `3 3 3` (con `let` → `0 1 2`).
