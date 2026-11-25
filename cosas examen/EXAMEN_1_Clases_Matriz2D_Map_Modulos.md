# 🎬 EXAMEN 1 (resuelto) — Multicines: clases en módulos + matriz 2D + Map

> **Qué entra:** clases con campos privados `#`, getters/setters, parámetro opcional, `Date`, matriz bidimensional, `splice`, `Map`, módulos `import`/`export`, `prompt` en bucle.
> **Dificultad:** ⭐⭐⭐ (es el estilo EXACTO de tu Prueba Práctica R4 y de "El Edificio") · **Tiempo:** 90–120 min.
> **Por qué cae seguro:** es la estructura del examen práctico de la UD2: `Equipo/Aula/Dpto` = `Entrada/Sala/Cine`. Si te sale este, te sale el de verdad.

---

## 📝 ENUNCIADO

Queremos gestionar las salas de un multicines. Se manejarán las estructuras descritas a continuación **organizadas por ficheros**, y se usarán **módulos** para importar/exportar lo necesario.

### EJERCICIO 1 — `index.html` y `principal.js`
Se proporciona el `index.html`. Organiza las clases en ficheros (`entrada.js`, `sala.js`, `cine.js`) y usa módulos.

### EJERCICIO 2 — Clase `Entrada` (archivo `entrada.js`)

| Propiedades |||||
|---|---|---|---|
| **Nombre** | **Tipo** | **Visibilidad** | **Descripción** |
| `codigo` | cadena | Privada | Identificador de la entrada. Se calcula en el constructor. |
| `fechaValidez` | Date | Privada | Fecha hasta la cual es válida la entrada. |
| `pelicula` | cadena | Privada | Título de la película. |
| `vip` | booleano | Privada | `true` si es una entrada VIP, `false` si es normal. |

| Métodos |||
|---|---|---|
| **Nombre** | **Parámetros** | **Descripción** |
| Getters y setters | — | Los que se necesiten (las cuatro propiedades son privadas). |
| Métodos privados | — | Los que se necesiten para mejorar la legibilidad. |
| `constructor(pelicula, vip, [dias])` | `pelicula:cadena` `vip:booleano` `dias:entero` | `pelicula` y `vip` inicializan las propiedades del mismo nombre. **Opcionalmente** se pasa `dias`: nº de días de validez desde hoy. Si no se pasa, la entrada es válida hasta el **31 de diciembre** del año actual (si ya estamos en diciembre, del año siguiente). |
| `toString()` | — | Devuelve el `codigo`. |

El `codigo` se genera con el formato **`T-PPP-dd-mm-yyyy`**, donde `T` es `V` (VIP) o `N` (normal), `PPP` son las **tres primeras letras de la película en mayúsculas** y `dd-mm-yyyy` es la `fechaValidez` en ese formato (con ceros a la izquierda).

### EJERCICIO 3 — Clase `Sala` (archivo `sala.js`)
La sala tiene filas de butacas con el mismo número de butacas en cada fila. Al crearla todas valen `null` (butaca libre).

| Propiedades |||||
|---|---|---|---|
| `numero` | cadena | Privada | Identificador de la sala |
| `butacas` | `Entrada[][]` | Privada | Matriz bidimensional de entradas |
| `aforo` | entero | Privada | Nº de butacas de la sala |

| Métodos |||||
|---|---|---|---|
| **Nombre** | **Parámetros** | **Devuelve** | **Descripción** |
| `constructor(numero, filas, columnas)` | `cadena, entero, entero` | — | Inicializa la matriz a `null`. `aforo = filas × columnas`. |
| `reservarButaca` | `entrada, fila, columna` | booleano | Coloca la entrada en esa butaca. Hay que comprobar que la posición existe. Las entradas **VIP** pueden sobrepasar el nº de columnas (se insertan desplazando el resto de la fila), pero **no el de filas**. |
| `getPosicion` | `codigo` | `[entero, entero]` | Devuelve `[fila, columna]` de la entrada con ese código, o `null` si no está. |
| `getPorcentajeOcupacion` | — | entero | Porcentaje (redondeado) de butacas ocupadas respecto al aforo. |
| `imprimirSala` | — | — | Muestra la sala por consola con `console.table`. |

### EJERCICIO 4 — Clase `Cine` (archivo `cine.js`)

| Propiedades |||||
|---|---|---|---|
| `salas` | `Map` | Privada | La **clave** es el nº de sala y el **valor** un objeto con la sala y la película que se proyecta. |

| Métodos |||||
|---|---|---|---|
| `constructor()` | — | — | Sin parámetros. |
| `addSala(sala, pelicula)` | `Sala, cadena` | booleano | Añade la sala. Devuelve `true` si se pudo y `false` si ya existía una sala con ese número. |
| `getUbicacion(codigo)` | `cadena` | cadena | Busca la entrada en todas las salas y devuelve `"Sala: x, Fila: x, Butaca: x"` o `"Entrada desconocida"`. Usa `getPosicion`. |
| `getTotalButacas()` | — | entero | Nº total de butacas (ocupadas o no) del cine. |
| `getSalasLlenas()` | — | array | Números de las salas con ocupación ≥ 100 %. |

### EJERCICIO 5 — `principal.js`
Crea 3 salas de 4×5, llena la sala 1 con entradas normales e implementa `venderEntradasVip()`, que pide por `prompt` sala, película, fila, columna y días **hasta que el usuario escriba `S`** (mayúscula o minúscula).

**Criterios:** `Entrada` 4 puntos · `Sala` 3 puntos · `Cine` 2 puntos · `principal.js` 1 punto. *No se corregirá ninguna tarea mal tabulada, con errores o que no se ajuste a las especificaciones.*

---

## 🧭 GUÍA DE TRADUCCIÓN (antes de picar código)

| El enunciado dice… | Se escribe… |
|---|---|
| "Privada" | `#codigo;` declarado arriba + `this.#codigo` |
| "Getters y setters" | `get Codigo() {…}` / `set Pelicula(v) {…}` (PascalCase, como el fichero de pruebas) |
| `constructor(pelicula, vip, [dias])` | `constructor(pelicula, vip, dias)` **sin corchetes** + `if (dias !== undefined …)` |
| "Opcionalmente… si no se pasa…" | `if (dias !== undefined && dias !== null && !isNaN(dias)) {…} else {…}` |
| "hoy + N días" | `const fin = new Date(hoy); fin.setDate(hoy.getDate() + Number(dias));` |
| "31 de diciembre" | `new Date(anio, 11, 31)` ← **mes 11** (diciembre), no 12 |
| "tres primeras letras en mayúsculas" | `pelicula.slice(0, 3).toUpperCase()` |
| "dd-mm-yyyy con ceros" | `String(f.getDate()).padStart(2, "0")` y `getMonth() + 1` |
| "matriz de `null`" | `Array.from({ length: filas }, () => Array(columnas).fill(null))` |
| "pueden sobrepasar columnas, no filas" | comprobar `fila` siempre; si es VIP → `splice(columna, 0, entrada)` |
| "comprobar que la posición existe" | `fila < 0 \|\| fila >= this.#butacas.length \|\| columna < 0` |
| "devuelve `[fila, columna]`" | `return [i, j];` (⚠️ no `[i][j]`) |
| "Map: clave nº sala, valor objeto" | `this.#salas.set(num, { sala, pelicula })` |
| "false si ya existía" | `if (this.#salas.has(sala.Numero)) return false;` |
| "hasta que escriba S" | `while (true) { … if (x === null \|\| x.trim().toUpperCase() === "S") break; }` |
| "usa módulos" | `export class …` · `import { … } from "./x.js"` · `<script type="module">` |

**⚠️ Trampas escondidas de este examen**
1. **Orden en el constructor:** `#generarCodigo()` usa `#pelicula`, `#vip` y `#fechaValidez` → asígnalos **antes** de llamarlo.
2. **Meses 0–11:** el 31 de diciembre es `new Date(anio, 11, 31)` y al imprimirlo hay que sumar 1 al mes.
3. **Dos `splice` distintos:** el VIP inserta (`splice(col, 0, x)`, la fila crece); el normal **sustituye** `null` (`fila[col] = x`).
4. **`getTotalButacas` cuenta celdas, no entradas:** `flat().length` (con un VIP extra sube a 62, como el 141 de la R4).
5. **El código no es único** (todas las normales de Avatar son `N-AVA-31-12-…`): `getPosicion` devuelve la primera. Es lo que pide el enunciado; no lo "arregles".
6. Si el usuario pulsa **Cancelar**, `prompt` devuelve `null` y `null.trim()` rompe → comprobar `=== null` **antes**.
7. Con `Map` se recorre con `for (const [k, v] of mapa)`, **nunca** `for..in`.

---

## ✅ SOLUCIÓN COMPLETA

### `entrada.js`
```js
"use strict";

export class Entrada {
    #codigo;
    #fechaValidez;
    #pelicula;
    #vip;

    constructor(pelicula, vip, dias) {              // dias OPCIONAL (sin corchetes)
        this.#pelicula = pelicula;                  // 1º lo que usan los métodos privados
        this.#vip = vip;
        this.#fechaValidez = this.#calcularFecha(dias);
        this.#codigo = this.#generarCodigo();       // 2º el código (usa película, vip y fecha)
    }

    get Codigo() { return this.#codigo; }
    get FechaValidez() { return this.#fechaValidez; }
    get Pelicula() { return this.#pelicula; }
    get Vip() { return this.#vip; }
    set Pelicula(valor) { this.#pelicula = valor; }
    set Vip(valor) { this.#vip = valor; }

    #calcularFecha(dias) {
        const hoy = new Date();
        if (dias !== undefined && dias !== null && !isNaN(dias)) {
            const fin = new Date(hoy);              // copia: no modificar "hoy"
            fin.setDate(hoy.getDate() + Number(dias));
            return fin;
        }
        // Sin días: 31 de diciembre (mes 11). Si ya estamos en diciembre → el del año siguiente
        const anio = hoy.getMonth() === 11 ? hoy.getFullYear() + 1 : hoy.getFullYear();
        return new Date(anio, 11, 31);
    }

    #generarCodigo() {                              // V/N-PPP-dd-mm-yyyy
        const tipo = this.#vip ? "V" : "N";
        const ppp = this.#pelicula.slice(0, 3).toUpperCase();
        const dd = String(this.#fechaValidez.getDate()).padStart(2, "0");
        const mm = String(this.#fechaValidez.getMonth() + 1).padStart(2, "0");   // +1: meses 0-11
        const yyyy = this.#fechaValidez.getFullYear();
        return `${tipo}-${ppp}-${dd}-${mm}-${yyyy}`;
    }

    toString() { return this.#codigo; }
}
```

### `sala.js`
```js
"use strict";

export class Sala {
    #numero;
    #butacas;
    #aforo;

    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#aforo = filas * columnas;
        // Matriz filas x columnas llena de null (cada fila es un array DISTINTO)
        this.#butacas = Array.from({ length: filas }, () => Array(columnas).fill(null));
    }

    get Numero() { return this.#numero; }
    get Butacas() { return this.#butacas; }
    get Aforo() { return this.#aforo; }

    reservarButaca(entrada, fila, columna) {
        // La fila NUNCA se puede sobrepasar
        if (fila < 0 || fila >= this.#butacas.length || columna < 0) return false;

        if (entrada.Vip) {
            // VIP: puede sobrepasar columnas → se inserta desplazando el resto
            this.#butacas[fila].splice(columna, 0, entrada);
            return true;
        }
        // Normal: la butaca debe existir y estar libre
        if (columna >= this.#butacas[fila].length || this.#butacas[fila][columna] !== null) return false;
        this.#butacas[fila][columna] = entrada;
        return true;
    }

    getPosicion(codigo) {
        for (let i = 0; i < this.#butacas.length; i++) {
            for (let j = 0; j < this.#butacas[i].length; j++) {
                if (this.#butacas[i][j] !== null && this.#butacas[i][j].Codigo === codigo) {
                    return [i, j];                  // [i, j] (NO [i][j])
                }
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        const ocupadas = this.#butacas.flat().filter(b => b !== null).length;
        return Math.round((ocupadas / this.#aforo) * 100);
    }

    imprimirSala() {
        console.log(`--- Sala ${this.#numero} ---`);
        console.table(this.#butacas.map(fila => fila.map(b => (b === null ? "·" : b.Codigo))));
    }
}
```

### `cine.js`
```js
"use strict";

export class Cine {
    #salas;

    constructor() {
        this.#salas = new Map();                    // clave: nº de sala · valor: { sala, pelicula }
    }

    get Salas() { return this.#salas; }

    addSala(sala, pelicula) {
        if (this.#salas.has(sala.Numero)) return false;     // ya existía
        this.#salas.set(sala.Numero, { sala: sala, pelicula: pelicula });
        return true;
    }

    getUbicacion(codigo) {
        for (const [numero, datos] of this.#salas) {        // for..of con Map (NUNCA for..in)
            const pos = datos.sala.getPosicion(codigo);
            if (pos !== null) return `Sala: ${numero}, Fila: ${pos[0]}, Butaca: ${pos[1]}`;
        }
        return "Entrada desconocida";
    }

    getTotalButacas() {
        let total = 0;
        for (const datos of this.#salas.values()) total += datos.sala.Butacas.flat().length;
        return total;
    }

    getSalasLlenas() {
        return [...this.#salas.values()]
            .filter(datos => datos.sala.getPorcentajeOcupacion() >= 100)
            .map(datos => datos.sala.Numero);
    }
}
```

### `principal.js`
```js
import { Entrada } from "./entrada.js";
import { Sala } from "./sala.js";
import { Cine } from "./cine.js";

const FILAS = 4;
const COLUMNAS = 5;

const cine = new Cine();
const programacion = [
    { sala: "1", pelicula: "Avatar" },
    { sala: "2", pelicula: "Matrix" },
    { sala: "3", pelicula: "Coco" }
];

programacion.forEach(p => {
    console.log(cine.addSala(new Sala(p.sala, FILAS, COLUMNAS), p.pelicula)
        ? "Sala " + p.sala + " creada"
        : "No se ha podido crear la sala " + p.sala);
});
console.log(cine.addSala(new Sala("1", FILAS, COLUMNAS), "Repetida")
    ? "Sala 1 creada"
    : "No se ha podido crear la sala 1 (ya existe)");
console.log("Total de butacas del cine: " + cine.getTotalButacas());          // 3 x 4 x 5 = 60

// Llenamos la sala 1 con entradas normales
const sala1 = cine.Salas.get("1").sala;
for (let i = 0; i < FILAS; i++)
    for (let j = 0; j < COLUMNAS; j++)
        sala1.reservarButaca(new Entrada("Avatar", false), i, j);
console.log("Ocupación sala 1: " + sala1.getPorcentajeOcupacion() + "%");     // 100%
console.log("Salas llenas: " + cine.getSalasLlenas());                        // 1

function venderEntradasVip() {
    while (true) {
        const sala = prompt("Sala (ej. 1) o S para salir:");
        if (sala === null || sala.trim().toUpperCase() === "S") break;        // null = pulsó Cancelar
        const pelicula = prompt("Película:");
        const fila = parseInt(prompt("Fila:"), 10);
        const columna = parseInt(prompt("Butaca (columna):"), 10);
        const dias = parseInt(prompt("Días de validez (vacío = hasta fin de año):"), 10);

        const datos = cine.Salas.get(sala.trim());
        if (!datos) {
            console.log("La sala " + sala + " no existe.");
            continue;
        }
        const entrada = new Entrada(pelicula.trim(), true, isNaN(dias) ? undefined : dias);
        if (datos.sala.reservarButaca(entrada, fila, columna)) {
            console.log(entrada.Codigo + " → " + cine.getUbicacion(entrada.Codigo));
            datos.sala.imprimirSala();
            console.log("Ocupación sala " + sala.trim() + ": " + datos.sala.getPorcentajeOcupacion() + "%");
        } else {
            console.log("No se ha podido reservar la butaca.");
        }
    }
}

venderEntradasVip();
console.log("Total de butacas del cine: " + cine.getTotalButacas());
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <script type="module" src="./principal.js"></script>   <!-- 🔴 type="module" -->
    <title>Multicines</title>
</head>
<body>
    <h1>Gestión del cine</h1>
    <p>Abre la consola (F12) para ver la salida. Usa Live Server.</p>
</body>
</html>
```

> Abre con **Live Server** (los módulos no funcionan con doble clic en `file://`) y mira la consola (F12).

---

## 🖥️ SALIDA ESPERADA
Simulando que el usuario escribe: `1 · Avatar VIP · 0 · 2 · 7` → `2 · Matrix · 1 · 7 · (vacío)` → `S`.

```text
Sala 1 creada
Sala 2 creada
Sala 3 creada
No se ha podido crear la sala 1 (ya existe)
Total de butacas del cine: 60
Ocupación sala 1: 100%
Salas llenas: 1
V-AVA-02-12-2026 → Sala: 1, Fila: 0, Butaca: 2
--- Sala 1 ---
┌─────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┐
│ (index) │ 0                  │ 1                  │ 2                  │ 3                  │ 4                  │ 5                  │
├─────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ 0       │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'V-AVA-02-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │
│ 1       │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │                    │
│ 2       │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │                    │
│ 3       │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │ 'N-AVA-31-12-2026' │                    │
└─────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┘
Ocupación sala 1: 105%
V-MAT-31-12-2026 → Sala: 2, Fila: 1, Butaca: 5
--- Sala 2 ---
┌─────────┬─────┬─────┬─────┬─────┬─────┬────────────────────┐
│ (index) │ 0   │ 1   │ 2   │ 3   │ 4   │ 5                  │
├─────────┼─────┼─────┼─────┼─────┼─────┼────────────────────┤
│ 0       │ '·' │ '·' │ '·' │ '·' │ '·' │                    │
│ 1       │ '·' │ '·' │ '·' │ '·' │ '·' │ 'V-MAT-31-12-2026' │
│ 2       │ '·' │ '·' │ '·' │ '·' │ '·' │                    │
│ 3       │ '·' │ '·' │ '·' │ '·' │ '·' │                    │
└─────────┴─────┴─────┴─────┴─────┴─────┴────────────────────┘
Ocupación sala 2: 5%
Total de butacas del cine: 62
```
*(Los códigos llevan fechas relativas al día en que se ejecuta: aquí era 25/11/2026, por eso `7` días → `02-12-2026` y sin días → `31-12-2026`.)*

**Qué comprobar:** 3 salas × 4 × 5 = **60** butacas · sala 1 al **100 %** y "salas llenas: 1" · el VIP insertado en la sala llena la sube a **105 %** (21 entradas para 20 butacas) · el VIP de la sala 2 en la columna 7 (que no existe) se coloca al final de su fila · el total final es **62** (60 + los 2 VIP insertados).

---

## 🔁 Variaciones que pueden pedirte con el mismo esqueleto
- Cambiar `Map` por `Set` o `array` de salas → `find(s => s.Numero === n)` en vez de `get`.
- "Eliminar una entrada" → `const [i, j] = getPosicion(cod); butacas[i].splice(j, 1);` (¡`splice`, no `= null`, si te piden desplazar!).
- "Devolver la sala más ocupada" → `[...salas.values()].reduce((a, b) => a.sala.getPorcentajeOcupacion() >= b.sala.getPorcentajeOcupacion() ? a : b)`.
- "Entradas VIP de toda la sala" → `butacas.flat().filter(b => b !== null && b.Vip)`.
