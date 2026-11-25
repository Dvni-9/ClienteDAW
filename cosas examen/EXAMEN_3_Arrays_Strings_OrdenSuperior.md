# 🧮 EXAMEN 3 (resuelto) — Strings, arrays, funciones de orden superior y matrices

> **Qué entra:** `split/trim/slice`, `map/filter/reduce/find/findIndex/some/every`, `sort` con comparador, `splice`, spread, `Set`, parámetro rest, matrices 2D.
> **Dificultad:** ⭐⭐ (muchos ejercicios cortos) · **Tiempo:** 75 min.
> **Por qué cae:** son los ejercicios de `f1…f6` (UT4), `Biblioteca`, `Comunidades y provincias`, `multiplicar_matrices` y el reto de duplicados. Es el bloque con más puntos "fáciles" del examen.

---

## 📝 ENUNCIADO (todo en `examen3.js`, sin usar bucles `for` salvo en el ejercicio 8)

1. **`aCamelCase(frase)`** → devuelve la frase en *camelCase*, sin espacios. `"  hOLA   mundo  CRUEL "` → `"holaMundoCruel"`.
2. **`alternarPalabras(frase)`** → palabras pares (0, 2, 4…) en MAYÚSCULAS e impares en minúsculas.
3. **`estadisticasPalabras(frase)`** → devuelve `{ media, longitudesConA }`: longitud media de las palabras y array con la longitud de cada palabra que contenga la letra "a" (mayúscula o minúscula).
4. **Departamentos.** Dados `departamentos = ["Ventas","Informática","Marketing"]` y la matriz `empleados` (una fila por departamento):
   a) Mostrar `Departamento: empleados separados por espacio`.
   b) Igual, pero **solo los empleados que empiecen por A o M, en mayúsculas**.
5. **Catálogo de juegos** (`titulo, genero, precio, stock, valoracion`):
   a) Añadir un juego **sin mutar** el array original.
   b) Títulos de los juegos **disponibles** (`stock > 0`) de un género, **ordenados por precio ascendente**.
   c) Valor total del inventario (`precio × stock`).
   d) ¿Hay alguno con valoración ≥ 9? ¿Tienen todos precio > 0?
   e) Buscar un juego por título y eliminar otro por título (si existe).
6. **`unicosOrdenados(array)`** → sin repetidos y ordenado numéricamente. Hazlo con `Set` y de forma "manual".
7. **`mediaAprobados(minimo, ...notas)`** → media de las notas que sean ≥ `minimo` (0 si no hay ninguna).
8. **Matrices.** a) Generar una matriz N×M de aleatorios 0–9. b) Sumar cada fila. c) Trasponer. d) Multiplicar dos matrices (devolver `null` si no se pueden multiplicar).

---

## 🧭 GUÍA DE TRADUCCIÓN

| El enunciado dice… | Se escribe… |
|---|---|
| "palabras de la frase (aunque haya espacios de más)" | `frase.trim().split(/\s+/)` |
| "transformar cada palabra" | `.map((p, i) => …)` (el 2º parámetro es el **índice**) |
| "pares / impares" | `i % 2 === 0` |
| "primera letra en mayúscula" | `p[0].toUpperCase() + p.slice(1).toLowerCase()` |
| "unir sin espacios / con espacios" | `.join("")` / `.join(" ")` |
| "media" | `reduce((ac, p) => ac + p.length, 0) / palabras.length` |
| "contiene la letra a (o A)" | `/a/i.test(p)` (o `p.toLowerCase().includes("a")`) |
| "empiezan por A o M" | `/^[AM]/i.test(e)` |
| "sin mutar el array" | `[...juegos, nuevo]` (⛔ no `push`) |
| "disponibles… ordenados por precio" | `.filter(…).sort((a, b) => a.precio - b.precio).map(j => j.titulo)` |
| "valor total / suma" | `.reduce((ac, j) => ac + j.precio * j.stock, 0)` |
| "¿alguno? / ¿todos?" | `.some(…)` / `.every(…)` |
| "buscar por título" | `.find(j => j.titulo === t)` |
| "eliminar por título" | `const i = findIndex(…); if (i !== -1) splice(i, 1)` |
| "sin repetidos" | `[...new Set(arr)]` |
| "número variable de parámetros" | `function f(minimo, ...notas)` (rest, siempre el último) |
| "matriz N×M" | `Array.from({ length: n }, () => Array.from({ length: m }, () => …))` |
| "traspuesta" | `M[0].map((_, j) => M.map(fila => fila[j]))` |
| "multiplicar A×B" | requiere `A[0].length === B.length`; 3 bucles `i, j, k` |

**⚠️ Trampas escondidas**
1. **`sort()` sin comparador ordena como TEXTO:** `[100, 25, 3].sort()` → `[100, 25, 3]`. Siempre `(a, b) => a - b`.
2. **`sort()` muta el array** (en el 5b el `filter` ya devuelve uno nuevo, así que no pasa nada; si ordenas el original, lo estropeas).
3. **`findIndex` devuelve `-1`** si no existe y `splice(-1, 1)` **borraría el último elemento** → comprueba `!== -1`.
4. **`reduce` sin valor inicial** (`0`) falla con arrays vacíos y empieza con el 1.º elemento como acumulador.
5. **Flecha con llaves necesita `return`:** `filter(j => { j.stock > 0 })` devuelve `[]`.
6. **Olvidar `.join("")`** al imprimir un array dentro de un `map` → salen comas entre líneas.
7. **Valores que se comparan como texto:** `"10" < "9"` es `true`. Convierte con `Number()`.
8. Con `trim().split(/\s+/)` una cadena vacía devuelve `[""]` (longitud 1, no 0).
9. En el 7, si no hay aprobados **no dividas entre 0** (`NaN`): devuelve 0.

---

## ✅ SOLUCIÓN COMPLETA

### `examen3.js`
```js
"use strict";

// ---------- 1) aCamelCase ----------
const aCamelCase = frase => frase.trim().split(/\s+/)
    .map((p, i) => i === 0 ? p.toLowerCase() : p[0].toUpperCase() + p.slice(1).toLowerCase())
    .join("");

// ---------- 2) alternarPalabras ----------
const alternarPalabras = frase => frase.trim().split(/\s+/)
    .map((p, i) => i % 2 === 0 ? p.toUpperCase() : p.toLowerCase())
    .join(" ");

// ---------- 3) estadisticasPalabras ----------
function estadisticasPalabras(frase) {
    const palabras = frase.trim().split(/\s+/);
    const media = palabras.reduce((ac, p) => ac + p.length, 0) / palabras.length;   // valor inicial 0
    const longitudesConA = palabras.filter(p => /a/i.test(p)).map(p => p.length);   // /a/i = "a" o "A"
    return { media, longitudesConA };
}

// ---------- 4) Matriz de departamentos y empleados ----------
const departamentos = ["Ventas", "Informática", "Marketing"];
const empleados = [
    ["Ana", "Luis", "Marta", "Pedro"],
    ["Mario", "Alba", "Raúl"],
    ["Sara", "Mateo", "Clara"]
];
const listarTodo = () => departamentos.map((d, i) => `${d}: ${empleados[i].join(" ")}`).join("\n");
const listarAoM = () => departamentos.map((d, i) =>
    `${d}: ${empleados[i].filter(e => /^[AM]/i.test(e)).map(e => e.toUpperCase()).join(" ")}`).join("\n");

// ---------- 5) Catálogo de juegos ----------
let juegos = [
    { titulo: "Zelda", genero: "Aventura", precio: 60, stock: 3, valoracion: 9.5 },
    { titulo: "FIFA", genero: "Deportes", precio: 70, stock: 0, valoracion: 7.0 },
    { titulo: "Hollow Knight", genero: "Aventura", precio: 15, stock: 10, valoracion: 9.2 },
    { titulo: "Tetris", genero: "Puzzle", precio: 5, stock: 20, valoracion: 8.0 }
];
juegos = [...juegos, { titulo: "Celeste", genero: "Aventura", precio: 20, stock: 5, valoracion: 9.0 }];   // spread: sin mutar

const titulosDisponibles = genero => juegos
    .filter(j => j.genero === genero && j.stock > 0)
    .sort((a, b) => a.precio - b.precio)            // ascendente por precio
    .map(j => j.titulo);

const valorInventario = () => juegos.reduce((ac, j) => ac + j.precio * j.stock, 0);
const hayExcelente = () => juegos.some(j => j.valoracion >= 9);
const todosConPrecio = () => juegos.every(j => j.precio > 0);
const buscarJuego = titulo => juegos.find(j => j.titulo === titulo);       // objeto o undefined
function eliminarJuego(titulo) {
    const i = juegos.findIndex(j => j.titulo === titulo);
    if (i !== -1) {                                 // sin este if, splice(-1, 1) borraría el ÚLTIMO
        juegos.splice(i, 1);
        return true;
    }
    return false;
}

// ---------- 6) Duplicados y orden numérico ----------
const unicosOrdenados = arr => [...new Set(arr)].sort((a, b) => a - b);
function unicosOrdenadosManual(arr) {
    const res = [];
    for (const x of arr) if (!res.includes(x)) res.push(x);
    return res.sort((a, b) => a - b);               // sin comparador ordenaría como TEXTO
}

// ---------- 7) Parámetro rest ----------
function mediaAprobados(minimo, ...notas) {         // notas es un array de verdad
    const aprobadas = notas.filter(n => n >= minimo);
    return aprobadas.length === 0 ? 0 : aprobadas.reduce((ac, n) => ac + n, 0) / aprobadas.length;
}

// ---------- 8) Matrices ----------
const matrizAleatoria = (n, m, max) =>
    Array.from({ length: n }, () => Array.from({ length: m }, () => Math.floor(Math.random() * (max + 1))));
const sumaFilas = M => M.map(fila => fila.reduce((ac, x) => ac + x, 0));
const trasponer = M => M[0].map((_, j) => M.map(fila => fila[j]));
function multiplicar(A, B) {
    if (A[0].length !== B.length) return null;      // columnas de A === filas de B
    const R = Array.from({ length: A.length }, () => Array(B[0].length).fill(0));
    for (let i = 0; i < A.length; i++)
        for (let j = 0; j < B[0].length; j++)
            for (let k = 0; k < B.length; k++) R[i][j] += A[i][k] * B[k][j];
    return R;
}

// ================= PRUEBAS =================
const frase = "En un lugar de la Mancha de cuyo nombre no quiero acordarme";
console.log("1)", aCamelCase("  hOLA   mundo  CRUEL "));
console.log("2)", alternarPalabras(frase));
console.log("3)", estadisticasPalabras(frase));
console.log("4a)\n" + listarTodo());
console.log("4b)\n" + listarAoM());
console.log("5a)", titulosDisponibles("Aventura"));
console.log("5b)", valorInventario());
console.log("5c)", hayExcelente(), todosConPrecio());
console.log("5d)", buscarJuego("Tetris"), buscarJuego("Doom"));
console.log("5e)", eliminarJuego("FIFA"), eliminarJuego("Doom"), juegos.map(j => j.titulo));
console.log("6)", unicosOrdenados([4, 0, 3, 4, 7, 3, 5, 100, 25, 0]), unicosOrdenadosManual([4, 0, 3, 4, 7, 3, 5, 100, 25, 0]));
console.log("7)", mediaAprobados(5, 3, 5, 7, 9, 2), mediaAprobados(5, 1, 2));
const A = [[1, 2, 3], [4, 5, 6]];
const B = [[7, 8], [9, 10], [11, 12]];
console.log("8a) suma de filas de A:", sumaFilas(A), "| traspuesta de A:", trasponer(A));
console.log("8b) A x B =", multiplicar(A, B), "| A x A =", multiplicar(A, A));
const M = matrizAleatoria(3, 4, 9);
console.table(M);
console.log("8c) sumas de filas de M:", sumaFilas(M));
```

---

## 🖥️ SALIDA ESPERADA
(La tabla del apartado 8c usa aleatorios: sus números cambian, pero cada suma de fila debe coincidir con su fila.)

```text
1) holaMundoCruel
2) EN un LUGAR de LA mancha DE cuyo NOMBRE no QUIERO acordarme
3) { media: 4, longitudesConA: [ 5, 2, 6, 9 ] }
4a)
Ventas: Ana Luis Marta Pedro
Informática: Mario Alba Raúl
Marketing: Sara Mateo Clara
4b)
Ventas: ANA MARTA
Informática: MARIO ALBA
Marketing: MATEO
5a) [ 'Hollow Knight', 'Celeste', 'Zelda' ]
5b) 530
5c) true true
5d) {
  titulo: 'Tetris',
  genero: 'Puzzle',
  precio: 5,
  stock: 20,
  valoracion: 8
} undefined
5e) true false [ 'Zelda', 'Hollow Knight', 'Tetris', 'Celeste' ]
6) [
  0,  3,   4, 5,
  7, 25, 100
] [
  0,  3,   4, 5,
  7, 25, 100
]
7) 7 0
8a) suma de filas de A: [ 6, 15 ] | traspuesta de A: [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
8b) A x B = [ [ 58, 64 ], [ 139, 154 ] ] | A x A = null
┌─────────┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │
├─────────┼───┼───┼───┼───┤
│ 0       │ 8 │ 7 │ 9 │ 0 │
│ 1       │ 1 │ 3 │ 8 │ 5 │
│ 2       │ 9 │ 2 │ 3 │ 7 │
└─────────┴───┴───┴───┴───┘
8c) sumas de filas de M: [ 24, 17, 21 ]
```

**Comprobaciones a mano:** frase de 12 palabras con 48 letras → media **4**; palabras con "a": `lugar(5) la(2) Mancha(6) acordarme(9)` · inventario: `60·3 + 70·0 + 15·10 + 5·20 + 20·5` = **530** · `A(2×3) × B(3×2)` = matriz **2×2** `[[58,64],[139,154]]` y `A × A` = `null` porque `3 ≠ 2`.

---

## 🔁 Más variaciones típicas
- **Biblioteca:** `contiene` → `some`; `prestar` → `findIndex + splice`; `forrarTodos` → `forEach`; libros largos → `filter(l => l.npaginas > 150)`.
- **Frecuencias:** `arr.reduce((ac, x) => { ac[x] = (ac[x] || 0) + 1; return ac; }, {})`.
- **Máximo / mínimo:** `Math.max(...arr)` o `reduce((a, b) => Math.max(a, b), -Infinity)`.
- **Palíndromo con arrays:** `s.toLowerCase().split("").reverse().join("") === s.toLowerCase()`.
- **Aplanar:** `matriz.flat()` · **contar celdas no nulas:** `matriz.flat().filter(x => x !== null).length`.
