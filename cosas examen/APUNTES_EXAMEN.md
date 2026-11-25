# 📘 APUNTES EXAMEN — Desarrollo Web en Entorno Cliente (JavaScript)

> **Cómo usar esto mañana:** abre el archivo en VS Code y usa **`Ctrl + F`** con la palabra clave de lo que te pida el enunciado (ej: `splice`, `Map`, `getMonth`, `import`, `regex`, `setInterval`). Cada bloque tiene **tabla rápida + código para copiar**.
>
> **Regla de oro del examen:** 1) lee el enunciado, 2) busca en el **Bloque 0** la frase que te piden, 3) copia el patrón, 4) comprueba el **Bloque 11** (los fallos que suspenden) antes de entregar.

---

## 📑 ÍNDICE

| # | Bloque | Palabras clave para `Ctrl+F` |
|---|--------|------------------------------|
| 0 | [MODO PÁNICO: traductor de enunciados a código](#bloque-0) | `traductor`, `si el enunciado dice`, `error consola` |
| 1 | [Sintaxis, variables, tipos, operadores, flujo](#bloque-1) | `var let const`, `typeof`, `falsy`, `==`, `switch` |
| 2 | [Strings y template strings](#bloque-2) | `slice`, `split`, `padStart`, `${}` |
| 3 | [Arrays, matrices 2D, map/filter/reduce](#bloque-3) | `splice`, `sort`, `matriz`, `reduce`, `fill` |
| 4 | [Math y Date](#bloque-4) | `random`, `getMonth`, `getDay`, `sumar días`, `curso académico` |
| 5 | [Map y Set](#bloque-5) | `Map`, `Set`, `duplicados` |
| 6 | [Expresiones regulares](#bloque-6) | `regex`, `test`, `match`, `dni`, `email` |
| 7 | [Funciones, arrow, rest/spread, desestructuración](#bloque-7) | `=>`, `...`, `desestructurar` |
| 8 | [Objetos, prototipos, clases, herencia, módulos](#bloque-8) | `class`, `#privado`, `get set`, `extends`, `import`, `prototype` |
| 9 | [Navegador: prompt, DOM, setInterval, debug](#bloque-9) | `prompt`, `document.write`, `setInterval`, `debugger` |
| 10 | [Ejercicios COMPLETOS resueltos (plantillas)](#bloque-10) | `Equipo`, `Aula`, `Edificio`, `Vehiculo`, `ajedrez` |
| 11 | [Los 15 fallos mortales](#bloque-11) | `checklist`, `fallos` |

> 📂 **Carpeta `cosas examen`:** junto a estos apuntes tienes 5 exámenes resueltos (`EXAMEN_1…5`), con enunciado, guía de traducción, solución y salida esperada.

---

<a id="bloque-0"></a>
# BLOQUE 0 — 🚨 MODO PÁNICO: TRADUCTOR DE ENUNCIADOS A CÓDIGO

## 0.1 Cómo leer las tablas de clase de Laura (y escribir la clase en 2 minutos)

Los enunciados traen una tabla así (ejemplo real de tu prueba R4):

| Nombre | Tipo | Visibilidad | Descripción |
|---|---|---|---|
| `id` | cadena | **Privada** | Identificador |
| `fecha` | Date | **Privada** | Fecha fin |

| Nombre | Parámetros | Devuelve | Descripción |
|---|---|---|---|
| `constructor(descripcion, personal, [dias])` | `dias:entero` | - | `[dias]` = **OPCIONAL** |
| `activaEquipo` | `equipo, fila, columna` | `booleano` | ... |

**Traducción columna → código:**

| Columna del enunciado | Se escribe así en JS |
|---|---|
| **Privada** | campo con almohadilla: `#id;` (se declara arriba, dentro de `class`) |
| **Pública** | campo normal: `nombre;` o `this.nombre = ...` en el constructor |
| "Getters y setters: SI" | `get Calle(){...}` y `set Calle(v){...}` |
| "Getters y setters: NO" | no los escribas |
| Tipo `cadena` / `entero` / `booleano` | no se escribe (JS no tiene tipos), solo piénsalo |
| Tipo `Equipo[][]` | matriz 2D: array de arrays |
| Tipo `Map` | `new Map()` |
| `[dias]` o "opcionalmente" | **parámetro normal** `dias` (NO pongas corchetes) y compruebas `if (dias === undefined)` |
| "valores por defecto" | `constructor(calle = "Sin nombre", numero = 1)` |
| `Devuelve: booleano` | termina con `return true;` / `return false;` |
| `Devuelve: -` | no hace `return` (solo hace cosas / `console.log`) |
| "Métodos privados" | `#nombreMetodo() {...}` y se llama `this.#nombreMetodo()` |

> 🔴 **Mira SIEMPRE el fichero de pruebas** (`principal_prueba.js`, `index.html`) antes de escribir: los nombres deben coincidir **al carácter** (mayúsculas incluidas). En tu R4 la prueba usa `aula.Numero`, `dptoNaranco.Aulas`, `aulaPrueba.Equipos` (con **mayúscula**) → tus getters tienen que llamarse `get Numero()`, `get Aulas()`, `get Equipos()`. Y las clases se llaman `Aula`, `Equipo`, `DptoInformatica` (en tu entrega pusiste `aula` y `dptoInformatica` en minúscula → fallaba).

**Esqueleto universal de clase (copia y rellena):**

```js
"use strict";
export class NombreClase {
    #propiedadPrivada;          // 1) declarar campos privados
    #otra;

    constructor(param1, param2 = 0) {   // 2) constructor (params opcionales con valor por defecto)
        this.#propiedadPrivada = param1;
        this.#otra = param2;
    }

    get PropiedadPrivada() { return this.#propiedadPrivada; }   // 3) getter (se usa SIN paréntesis: obj.PropiedadPrivada)
    set PropiedadPrivada(v) { this.#propiedadPrivada = v; }     //    setter (se usa: obj.PropiedadPrivada = 5)

    metodoPublico(x) {                  // 4) métodos
        return this.#metodoPrivado(x);
    }
    #metodoPrivado(x) {                 // 5) método privado
        return x * 2;
    }
    toString() {                        // 6) lo que sale al hacer console.log(`${obj}`) / String(obj)
        return `${this.#propiedadPrivada}`;
    }
}
```

## 0.2 Diccionario: "Si el enunciado dice… → escribe esto"

| El enunciado dice… | Escribe esto |
|---|---|
| "Organiza las clases en ficheros y usa módulos" | `export class X {}` en `x.js` · `import { X } from "./x.js";` · HTML: `<script type="module" src="./principal.js"></script>` |
| "propiedad privada" | `#nombre;` + `this.#nombre = ...` |
| "getters y setters" | `get Nombre(){return this.#nombre;}` `set Nombre(v){this.#nombre=v;}` |
| "parámetro opcional / valores por defecto" | `constructor(a = 5)` o `if (dias === undefined) {...}` |
| "array bidimensional filas x columnas, inicialmente null" | `Array.from({length: filas}, () => Array(columnas).fill(null))` |
| "recorrer todas las celdas de la matriz" | `for (let i=0;i<m.length;i++) for (let j=0;j<m[i].length;j++) {...}` |
| "mostrar la matriz por consola" | `console.table(matriz)` |
| "insertar en posición desplazando el resto" | `fila.splice(columna, 0, elemento)` |
| "borrar el elemento de la posición i" | `array.splice(i, 1)` |
| "borrar el elemento X si existe" | `const i = arr.indexOf(x); if (i !== -1) arr.splice(i, 1);` |
| "comprobar que existe la planta/puerta/posición" | `if (p >= 0 && p < this.#plantas.length && q >= 0 && q < this.#plantas[p].length)` |
| "listado clave → valor, sin repetir clave" | `new Map()` · `.set(k,v)` `.get(k)` `.has(k)` |
| "devuelve verdadero si no existía ya (insertar)" | `if (this.#aulas.has(n)) return false; this.#aulas.set(n, {...}); return true;` |
| "colección sin duplicados" | `new Set()` / `[...new Set(array)]` |
| "número de elementos de un Map/Set" | `.size` (sin paréntesis) |
| "recorrer un Map" | `for (const [clave, valor] of mapa) {...}` |
| "validar que cumple un formato / patrón" | `/^...$/.test(dato)` → ver Bloque 6 |
| "pedir datos hasta que escriba S" | `while (true) { const x = prompt("..."); if (x === null \|\| x.trim().toUpperCase() === "S") break; ... }` |
| "convertir lo que escribe el usuario a número" | `parseInt(valor, 10)` o `Number(valor)` |
| "fecha de hoy" | `const hoy = new Date();` |
| "sumar N días a una fecha" | `const f = new Date(hoy); f.setDate(f.getDate() + Number(n));` |
| "30 de junio del curso actual (empieza 1 sept)" | `const anio = hoy.getMonth() >= 8 ? hoy.getFullYear()+1 : hoy.getFullYear(); new Date(anio, 5, 30);` |
| "formato dd-mm-yyyy" | `` `${String(d.getDate()).padStart(2,"0")}-${String(d.getMonth()+1).padStart(2,"0")}-${d.getFullYear()}` `` |
| "últimos 3 caracteres de la descripción" | `descripcion.slice(-3)` |
| "día de la semana" | `d.getDay()` → 0=Domingo … 6=Sábado |
| "número aleatorio entre a y b (ambos incluidos)" | `Math.floor(Math.random()*(b-a+1))+a` |
| "elemento aleatorio de un array" | `arr[Math.floor(Math.random()*arr.length)]` |
| "transformar cada elemento" | `arr.map(x => ...)` |
| "quedarme solo con los que cumplan" | `arr.filter(x => ...)` |
| "sumar / acumular / un solo valor" | `arr.reduce((ac, x) => ac + x, 0)` |
| "buscar el primero que cumpla" | `arr.find(x => ...)` (devuelve el elemento o `undefined`) |
| "posición del primero que cumpla" | `arr.findIndex(x => ...)` (o `-1`) |
| "todos cumplen" / "alguno cumple" | `arr.every(...)` / `arr.some(...)` |
| "ordenar números de menor a mayor" | `arr.sort((a, b) => a - b)` |
| "ordenar textos alfabéticamente" | `arr.sort((a, b) => a.localeCompare(b))` |
| "copiar un array / objeto" | `[...arr]` / `{...obj}` |
| "quitar duplicados" | `[...new Set(arr)]` |
| "unir elementos en un texto" | `arr.join(", ")` |
| "dividir un texto en palabras" | `texto.trim().split(/\s+/)` |
| "mostrar en la página web" | `document.write("<p>"+x+"</p>")` o `document.getElementById("id").innerHTML += ...` |
| "pintar una tabla HTML" | `document.write("<table border='1'>")` + `<tr><td>` en bucle + `</table>` |
| "ejecutar cada X segundos, N veces" | `const id = setInterval(() => { ...; if (++n === N) clearInterval(id); }, X*1000);` |
| "ejecutar una vez pasado un tiempo" | `setTimeout(funcion, ms)` |
| "clase hija / hereda de" | `class Hija extends Padre { constructor(a,b){ super(a); this.b=b; } }` |
| "método estático / de la clase" | `static metodo() {}` → se llama `Clase.metodo()` |
| "objeto que delega en otro (prototipo)" | `Object.create(padre)` |
| "mostrar el objeto como texto" | método `toString()` |
| "extraer propiedades de un objeto en variables" | `const { nombre, edad } = obj;` |
| "extraer elementos de un array en variables" | `const [a, b, ...resto] = arr;` |
| "función con nº indefinido de parámetros" | `function f(...args) {}` |
| "pasar un array como argumentos sueltos" | `f(...array)` |
| "contar aparición de una letra" | `(texto.match(/e/g) \|\| []).length` |
| "comprobar si empieza por V o C" | `/^[VC]/i.test(palabra)` |

## 0.3 Guía de emergencia de errores en la consola (F12 → Console)

| Error que sale en rojo | Causa real | Solución en 10 segundos |
|---|---|---|
| `Uncaught SyntaxError: Cannot use import statement outside a module` | El HTML carga el JS sin `type="module"` | `<script type="module" src="./principal.js"></script>` |
| `Failed to resolve module specifier` / `Failed to load module script` / error **CORS** con `file://` | Los módulos NO funcionan abriendo el .html con doble clic | Abrir con **Live Server** (extensión de VS Code) y escribir los imports **con `.js`**: `"./equipo.js"` (tú tenías `"./equipo"`) |
| `ReferenceError: X is not defined` | Nombre mal escrito, falta `import`, o variable usada fuera de su bloque (`let`) | Revisar mayúsculas (`idEquipo` ≠ `idequipo`), añadir el `import`, mirar el ámbito |
| `TypeError: Cannot read properties of undefined (reading 'x')` | Accedes a `algo.x` pero `algo` es `undefined` (ej: `this.#equipos[fila][col]` con fila que no existe) | Comprobar límites antes; revisar que no llamas a `this.metodo` desde un callback normal (`function`) |
| `TypeError: X is not a function` | Llamas `obj.metodo()` pero era un getter (`obj.Id`, sin paréntesis) o el nombre no existe | Getter = sin `()`. Método = con `()` |
| `SyntaxError: Private field '#x' must be declared in an enclosing class` | Usas `this.#x` sin declararlo arriba | Añade `#x;` en el cuerpo de la clase |
| `NaN` en pantalla | Operación numérica con algo no numérico (`"hola" * 2`, `parseInt("")`, `undefined + 1`) | Convertir con `Number()`/`parseInt(x,10)` y comprobar con `isNaN(x)` |
| `undefined` en pantalla | Propiedad inexistente, parámetro no pasado o función sin `return` | Revisa el nombre de la propiedad y que la función hace `return` |
| `Assignment to constant variable` | Reasignaste una `const` | Usa `let` (o muta el contenido en vez de reasignar) |
| `Unexpected token` / `Unexpected end of input` | Falta/sobra `}` `)` `,` | `Shift+Alt+F` (formatea) y mira dónde se rompe la indentación |

---

<a id="bloque-1"></a>
# BLOQUE 1 — SINTAXIS BASE, VARIABLES, TIPOS, OPERADORES Y FLUJO

## 1.1 Convenciones de nombres

| Estilo | Ejemplo | Se usa en JS para… |
|---|---|---|
| `camelCase` | `miVariable`, `calcularFecha` | variables, funciones, métodos |
| `PascalCase` | `Equipo`, `DptoInformatica` | **clases** |
| `MAYUSCULAS_CON_GUION_BAJO` | `FILAS`, `ANIOTOTAL` | **constantes** |
| `snake_case` / `kebab-case` | `mi_var` / `mi-clase` | no recomendado en JS (kebab-case en CSS y ficheros) |

- Contadores de bucle: `i`, `j`, `k`. Nombres claros, sin acentos ni espacios. No empezar por número.
- `"use strict";` (primera línea del fichero) → prohíbe declarar variables sin `let/var/const` y otras malas prácticas. **Ponlo siempre.**
- Comentarios: `// una línea` · `/* varias líneas */`

## 1.2 Declarar variables: `var` vs `let` vs `const`

| | `var` | `let` | `const` |
|---|---|---|---|
| Ámbito | **función** (ignora `{}` de `if`/`for`) | **bloque `{}`** | **bloque `{}`** |
| Redeclarar (`let a; let a;`) | ✅ permitido (malo) | ❌ error | ❌ error |
| Reasignar | ✅ | ✅ | ❌ error |
| Usar antes de declarar | `undefined` (hoisting) | ❌ `ReferenceError` | ❌ `ReferenceError` |
| Úsalo para… | **nunca** | valores que cambian | todo lo demás (por defecto) |

```js
"use strict";
{ var a = 1; let b = 2; }
console.log(a);  // 1  → var "se escapa" del bloque
// console.log(b); // ❌ ReferenceError: b is not defined

console.log(x);  // undefined (hoisting: la declaración "sube", el valor NO)
var x = 10;
// console.log(y); // ❌ ReferenceError (let existe pero aún no se puede usar)
let y = 20;

const arr = [1, 2];
arr.push(3);     // ✅ OK: la const no se reasigna, pero el contenido SÍ puede cambiar
// arr = [];     // ❌ TypeError: Assignment to constant variable
```

**Hoisting en funciones:**
- `function saludar(){}` (nombrada) → **se puede llamar ANTES** de escribirla.
- `const f = function(){}` / `const f = () => {}` → **NO** se puede llamar antes (con `var` da `TypeError: f is not a function`, con `let/const` da `ReferenceError`).

**IIFE** (función que se ejecuta sola; sirve para aislar variables; hoy se usa menos porque `let` ya tiene ámbito de bloque):
```js
(function () {
    var secreto = "solo existe aquí dentro";
    console.log(secreto);
})();
```

## 1.3 Tipos de datos

JavaScript es de **tipado débil y dinámico**: una variable puede cambiar de tipo (`let a = 1; a = "hola";`).

| Primitivos (inmutables) | Ejemplo |
|---|---|
| `number` | `10`, `1.03`, `NaN`, `Infinity` |
| `string` | `"hola"`, `'hola'`, `` `hola` `` |
| `boolean` | `true`, `false` |
| `undefined` | variable declarada sin valor |
| `null` | "vacío" a propósito |

**Objetos (mutables):** arrays, `{}`, funciones, `Date`, `Map`, `Set`, `RegExp`…

| Expresión | Resultado | Aviso |
|---|---|---|
| `typeof 10` | `"number"` | |
| `typeof "a"` | `"string"` | |
| `typeof true` | `"boolean"` | |
| `typeof undefined` | `"undefined"` | |
| `typeof null` | `"object"` | 🪤 **bug histórico de JS** |
| `typeof []` | `"object"` | 🪤 los arrays son objetos → para saber si es array: `Array.isArray(x)` |
| `typeof {}` | `"object"` | |
| `typeof function(){}` | `"function"` | |
| `typeof NaN` | `"number"` | 🪤 |
| `"hola".constructor.name` | `"String"` | da el tipo "real"; **falla con `null`/`undefined`** (TypeError) |

## 1.4 Conversiones y funciones globales

| Función | Qué hace | Ejemplo |
|---|---|---|
| `parseInt(x, 10)` | texto → entero. **TRUNCA** (no redondea), lee hasta que encuentra algo no numérico | `parseInt("12px")`→`12` · `parseInt(1.67)`→`1` · `parseInt("abc")`→`NaN` |
| `parseFloat(x)` | texto → decimal | `parseFloat("1.43abc")`→`1.43` |
| `Number(x)` | conversión estricta | `Number("12px")`→`NaN` · `Number("")`→`0` |
| `String(x)` / `x.toString()` | → texto | `(255).toString(16)`→`"ff"` |
| `n.toString(2 \| 8 \| 16)` | número → binario / octal / hex | `(10).toString(2)`→`"1010"` |
| `isNaN(x)` | ¿es NaN? | `isNaN("hola")`→`true` · 🪤 `NaN === NaN` es `false` |
| `isFinite(x)` | ¿no es Infinity ni NaN? | `1/0`→`Infinity` (JS NO da error al dividir entre 0) |
| `eval("2+2")` | ejecuta texto como código → `4` | peligroso, evitar |
| `n.toFixed(2)` | decimales fijos (devuelve **texto**) | `(3.14159).toFixed(2)`→`"3.14"` |

## 1.5 Truthy / Falsy (muy preguntado)

**Solo 6 valores son `false` en un `if`:** `0`, `NaN`, `""` (vacío), `false`, `null`, `undefined`.

**Todo lo demás es `true`**, incluidas estas trampas: `"0"`, `"false"`, `[]`, `{}`, `Infinity`, `function(){}`, `-1`, `" "`.

```js
if ("0")  console.log("entra");   // ✅ entra (cadena no vacía)
if ([])   console.log("entra");   // ✅ entra (array vacío es objeto)
if (0)    console.log("no entra");
```

## 1.6 Coerción de tipos y `==` vs `===`

```js
"1" + 2        // "12"   → con + y texto, CONCATENA
"5" - 2        // 3      → con - * / convierte a número
"3" * "2"      // 6
true + true    // 2      → true=1, false=0
true + "a"     // "truea"
[] + []        // ""
```

| Operador | Compara | Ejemplo |
|---|---|---|
| `==` | valor **con conversión** (laxo) | `"1" == 1` → `true` · `"" == 0` → `true` · `"0" == false` → `true` · `true == 1` → `true` |
| `===` | valor **y tipo** (estricto) | `"1" === 1` → `false` · `true === 1` → `false` |
| `!=` / `!==` | lo contrario | usa siempre `!==` |

> ✅ **Regla:** usa SIEMPRE `===` y `!==`. En el examen, si te preguntan "¿qué sale?", aplica la coerción de arriba.

## 1.7 Operadores

| Tipo | Operadores |
|---|---|
| Aritméticos | `+ - * / % **` (`7 % 3`→`1`, `2 ** 3`→`8`) |
| Incremento | `x++` (devuelve el valor **y luego** suma) · `++x` (**suma y luego** devuelve) |
| Asignación | `= += -= *= /= %=` |
| Comparación | `< > <= >= === !==` |
| Lógicos (cortocircuito) | `&&` (y) · `\|\|` (o) · `!` (no) |
| Ternario | `condicion ? valorSiTrue : valorSiFalse` |
| Bit a bit | `& \| ^ ~ << >>` |

```js
let a = 5;
console.log(a++); // 5  (luego a=6)
console.log(++a); // 7
const nombre = prompt("Nombre") || "Anónimo";       // || devuelve el primero "truthy"
const msg = edad >= 18 ? "mayor" : "menor";         // ternario
```

## 1.8 Control de flujo

```js
// if / else if / else
if (n > 0) { ... } else if (n < 0) { ... } else { ... }

// switch (¡no olvides break!)
switch (dia) {
    case 0: console.log("Domingo"); break;
    case 6: console.log("Sábado"); break;
    default: console.log("Entre semana");
}

// while / do..while
while (i < 10) { i++; }
do { i--; } while (i > 0);       // se ejecuta AL MENOS una vez

// for clásico
for (let i = 0; i < arr.length; i++) { ... }

// for..in → recorre CLAVES / ÍNDICES (como texto) de objetos y arrays
for (const k in persona) console.log(k, persona[k]);
for (const idx in frutas) console.log(idx, frutas[idx]);     // idx = "0","1",...

// for..of → recorre VALORES de iterables (array, string, Map, Set)
for (const fruta of frutas) console.log(fruta);
for (const letra of "Sol") console.log(letra);

// try / catch
try { JSON.parse("{mal"); } catch (e) { console.log("Error:", e.message); } finally { /* siempre */ }
```

| | `for..in` | `for..of` |
|---|---|---|
| Da | claves / índices | valores |
| Sirve para | **objetos** | **arrays, strings, Map, Set** |
| 🪤 En `Map`/`Set` | no recorre nada | ✅ úsalo |
| Objeto con `for..of` | ❌ TypeError (no es iterable) → usa `Object.keys/values/entries(obj)` |

---

<a id="bloque-2"></a>
# BLOQUE 2 — STRINGS Y TEMPLATE STRINGS

## 2.1 Template strings (comillas invertidas `` ` ``)

```js
const a = 1, b = 2;
console.log('Suma: ${a+b}');   // "Suma: ${a+b}"  → con comillas normales NO interpola
console.log(`Suma: ${a+b}`);   // "Suma: 3"       → con backticks SÍ
const texto = `Línea 1
Línea 2`;                      // multilínea sin \n
const id = `${tipo}-${zzz}-${dd}-${mm}-${yyyy}`;   // lo más útil en el examen
```

**Tagged template** (función que recibe las partes; raro pero salió en clase):
```js
function foo(texto, p1, p2, p3) { return `La suma es: ${p1 + p2}`; }
foo`La suma de ${1} y ${2} es ${3}`;   // texto = array de trozos fijos; p1,p2,p3 = valores ${}
```

## 2.2 Métodos de String (TABLA COMPLETA)
Un string es **inmutable**: los métodos devuelven un string nuevo, no modifican el original.

Ejemplo base: `const s = "Esternocleidomastoideo";`

| Método | Qué hace | Ejemplo → resultado |
|---|---|---|
| `s.length` | nº de caracteres (propiedad, sin `()`) | `"hola".length` → `4` |
| `s.charAt(2)` / `s[2]` | carácter en la posición | `s.charAt(2)` → `"t"` |
| `s.charCodeAt(0)` | código UTF-16 | `"A".charCodeAt(0)` → `65` |
| `s.indexOf("e")` | posición de la **primera** aparición (o `-1`); distingue mayúsculas | `s.indexOf("e")` → `3` (la `E` inicial no cuenta) · `s.indexOf("z")` → `-1` |
| `s.lastIndexOf("e")` | posición de la **última** aparición | |
| `s.includes("cleido")` | ¿contiene? → boolean | `true` |
| `s.startsWith("Este")` | ¿empieza por? | `true` |
| `s.endsWith("ideo")` | ¿termina en? | `true` |
| `s.slice(i, f)` | trozo desde `i` hasta `f` **(f excluido)**; admite **negativos** | `s.slice(0,4)` → `"Este"` · `s.slice(-3)` → `"deo"` (**últimos 3**) |
| `s.substring(i, f)` | como slice pero sin negativos | `s.substring(0,4)` → `"Este"` |
| `s.substr(i, n)` | desde `i`, `n` caracteres (obsoleto) | |
| `s.toUpperCase()` / `toLowerCase()` | mayúsculas / minúsculas | |
| `s.split(sep)` | trocea → **array** (el separador desaparece) | `"a-b-c".split("-")` → `["a","b","c"]` · `"hola".split("")` → `["h","o","l","a"]` |
| `s.trim()` | quita espacios de los extremos | `"  hi  ".trim()` → `"hi"` |
| `s.replace("e","a")` | reemplaza **la primera** | `"ee".replace("e","a")` → `"ae"` |
| `s.replace(/e/g,"a")` | reemplaza **todas** (regex con `g`) | `"ee"` → `"aa"` |
| `s.match(/e/g)` | array de coincidencias (o `null`) | `"eee".match(/e/g)` → `["e","e","e"]` |
| `s.repeat(2)` | repite | `"Hola ".repeat(2)` → `"Hola Hola "` |
| `s.padStart(5,"0")` | rellena por la izquierda | `"42".padStart(5,"0")` → `"00042"` · `"7".padStart(2,"0")` → `"07"` |
| `s.padEnd(5,"0")` | rellena por la derecha | `"42".padEnd(5,"0")` → `"42000"` |
| `a.concat(b)` o `a + b` | unir | |

## 2.3 Recorrer un string

```js
for (const letra of "Sol") console.log(letra);                 // letras
for (let i = 0; i < "Sol".length; i++) console.log("Sol"[i]);  // por índice
```

## 2.4 Recetas rápidas (las de tus ejercicios, corregidas)

```js
const frase = "en un lugar de la mancha";

// 1) Invertir letras
frase.split("").reverse().join("");

// 2) Invertir el orden de las palabras
frase.split(" ").reverse().join(" ");

// 3) Palabras limpias (aunque haya espacios dobles o en los extremos)
const palabras = frase.trim().split(/\s+/);

// 4) Últimos 3 caracteres
frase.slice(-3);                                   // "cha"

// 5) camelCase: "en un lugar" → "enUnLugar"
palabras.map((p, i) => i === 0 ? p : p[0].toUpperCase() + p.slice(1)).join("");

// 6) Longitud media de palabra
const media = palabras.reduce((ac, p) => ac + p.length, 0) / palabras.length;

// 7) Longitudes de las palabras que contienen la letra "a"
palabras.filter(p => p.includes("a")).map(p => p.length);

// 8) Alternar MAYÚSCULAS / minúsculas por palabra
palabras.map((p, i) => i % 2 === 0 ? p.toUpperCase() : p.toLowerCase()).join(" ");

// 9) Capitalizar primera letra
const cap = p => p[0].toUpperCase() + p.slice(1).toLowerCase();
```

---

<a id="bloque-3"></a>
# BLOQUE 3 — ARRAYS, MATRICES 2D Y FUNCIONES DE ORDEN SUPERIOR

## 3.1 Crear arrays

```js
const a = [1, 2, 3];
const b = new Array(5);               // 5 huecos vacíos
const c = Array.of(7, 8);             // [7, 8]
const d = Array.from("hola");         // ["h","o","l","a"]
const e = new Array(3).fill(0);       // [0, 0, 0]
const f = Array.from({ length: 4 }, (_, i) => i * 2);   // [0, 2, 4, 6]
```

- Un array es un **objeto**; puedes ponerle propiedades de texto (`lista["nombre"] = "laura"`) pero **NO cuentan en `.length`** ni en los índices.
- `.length` = (índice más alto + 1), aunque haya huecos: `a=[]; a[3]=1; a.length` → `4`.

## 3.2 ⭐ MATRICES 2D (preguntan SIEMPRE: aula, edificio, tablero, plantas…)

```js
// ✅ FORMA CORRECTA: filas x columnas, todas a null
const matriz = Array.from({ length: filas }, () => Array(columnas).fill(null));

// ✅ Otra forma correcta (con bucles)
const m2 = [];
for (let i = 0; i < filas; i++) {
    m2[i] = [];
    for (let j = 0; j < columnas; j++) m2[i][j] = null;
}

// ❌ TRAMPA: todas las filas son EL MISMO array (se modifican a la vez)
const mal = new Array(3).fill(new Array(4));
mal[0][0] = "X";   // ¡aparece en las 3 filas!
```

```js
// Acceso:           matriz[fila][columna]     ← SIEMPRE dos corchetes separados
// ❌ matriz[1,2]  → NO es lo mismo (operador coma) · ❌ return [i][j] → devuelve undefined
// ✅ para devolver una posición:  return [i, j];

// Recorrer
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
matriz.forEach((fila, i) => fila.forEach((valor, j) => console.log(i, j, valor)));

// Mostrar bonito en consola
console.table(matriz);

// Filas con distinta longitud (jagged) es válido:  [[1,2,3],[4,5],[6]]
// Nº de elementos totales:
matriz.reduce((total, fila) => total + fila.length, 0);
// Nº de celdas NO null:
matriz.flat().filter(x => x !== null).length;
```

**Añadir filas dinámicas (como `agregaPlantasYPuertas` del edificio):**
```js
for (let i = 0; i < nPlantas; i++) this.#plantas.push(Array(nPuertas).fill(null));
```

## 3.3 Métodos de Array — TABLA COMPLETA (¿muta el original?)

| Método | Qué hace | Devuelve | ¿Muta? |
|---|---|---|---|
| `a.length` | nº de posiciones | número | — |
| `a.push(x, y)` | añade al **final** | nueva longitud | ✅ SÍ |
| `a.pop()` | quita el **último** | el elemento quitado | ✅ SÍ |
| `a.unshift(x)` | añade al **principio** | nueva longitud | ✅ SÍ |
| `a.shift()` | quita el **primero** | el elemento quitado | ✅ SÍ |
| `a.reverse()` | invierte | el mismo array | ✅ SÍ |
| `a.sort()` | ordena (por defecto **como TEXTO**) | el mismo array | ✅ SÍ |
| `a.splice(i, n, ...nuevos)` | quita/inserta/sustituye | array con lo quitado | ✅ SÍ |
| `a.concat(b)` | une arrays | array nuevo | ❌ NO |
| `a.join(sep)` | une en un **texto** | string | ❌ NO |
| `a.slice(i, f)` | copia un trozo (f excluido, admite negativos) | array nuevo | ❌ NO |
| `a.indexOf(x)` | posición de la 1ª aparición (o `-1`) | número | ❌ NO |
| `a.lastIndexOf(x)` | posición de la última | número | ❌ NO |
| `a.includes(x)` | ¿contiene? | boolean | ❌ NO |
| `a.flat()` | aplana un nivel | array nuevo | ❌ NO |
| `Array.isArray(x)` | ¿es array? | boolean | — |

### `splice` — los 3 usos (¡el más preguntado!)
```js
const a = ["a", "b", "c", "d"];
a.splice(1, 1);              // BORRAR 1 elemento en pos 1       → ["a","c","d"]
a.splice(1, 0, "X");         // INSERTAR en pos 1 sin borrar     → ["a","X","c","d"]  (desplaza el resto)
a.splice(2, 1, "Y");         // SUSTITUIR 1 elemento en pos 2    → ["a","X","Y","d"]
a.splice(1, 2, "P", "Q");    // quita 2 desde pos 1 y mete P,Q   → ["a","P","Q","d"]
```
> Parámetros: `(posición, cuántos borrar, ...qué meter)`. Insertar = **borrar 0**.

### `sort` — por qué falla con números
```js
[100, 25, 3].sort();                    // [100, 25, 3] ❌ ordena como texto: "100" < "25" < "3"
[100, 25, 3].sort((a, b) => a - b);     // [3, 25, 100] ✅ ascendente
[100, 25, 3].sort((a, b) => b - a);     // [100, 25, 3] ✅ descendente
["b", "á", "a"].sort((a, b) => a.localeCompare(b));   // texto con acentos
```
La función comparadora devuelve: **negativo** → `a` va antes · **0** → igual · **positivo** → `b` va antes.

## 3.4 Copias: referencia vs independiente

```js
const original = [1, 2, 3];
const ref = original;        // ❌ NO copia: son EL MISMO array
ref[0] = 99;                 // original también cambia → [99,2,3]

const copia = [...original]; // ✅ copia independiente (también: original.slice())
copia[0] = 0;                // original NO cambia
```
- Con **objetos y arrays dentro de arrays** la copia con `[...]` es *superficial* (los objetos internos se siguen compartiendo).
- Al pasar un objeto/array a una función, la función puede **modificarlo** (se pasa la referencia): `cambiaNombre(o)` cambia `o.nombre`; pero `aChar == [...]` (con `==`) **no asigna nada**.

## 3.5 Iteradores de array
```js
const it = ["a", "b"].entries();    // también .keys() y .values()
it.next();                           // { value: [0,"a"], done: false }
for (const [i, v] of ["a", "b"].entries()) console.log(i, v);
Array.from(["a","b"].keys());        // [0, 1]  → de iterador a array
```
⚠️ Un iterador **se consume**: el segundo `for..of` sobre el mismo iterador **no muestra nada**.

## 3.6 ⭐ Funciones de orden superior (map / filter / reduce…)

Reciben **una función** (casi siempre flecha). Son **encadenables** (`.filter(...).map(...)`).

| Método | Para qué | Devuelve | Firma del callback |
|---|---|---|---|
| `forEach` | hacer algo con cada uno | `undefined` | `(elem, i, array)` |
| `map` | **transformar** cada elemento | array nuevo, **misma longitud** | `(elem, i, array)` |
| `filter` | **quedarse** con los que cumplen | array nuevo (más corto) | `(elem, i, array)` → true/false |
| `reduce` | **acumular** en un solo valor | un valor | `(ac, elem, i, array)` |
| `reduceRight` | igual, de derecha a izquierda | un valor | `(ac, elem, i, array)` |
| `find` | el **primero** que cumple | elemento o `undefined` | `(elem, i, array)` |
| `findIndex` | **posición** del primero que cumple | índice o `-1` | `(elem, i, array)` |
| `some` | ¿**alguno** cumple? | boolean | |
| `every` | ¿**todos** cumplen? | boolean | |

```js
const n = [1, 2, 3, 4];
n.map(x => x * 2);                    // [2, 4, 6, 8]
n.map((x, i) => x + i);               // [1, 3, 5, 7]
n.filter(x => x % 2 === 0);           // [2, 4]
n.find(x => x > 2);                   // 3
n.findIndex(x => x > 2);              // 2
n.some(x => x > 3);                   // true
n.every(x => x > 0);                  // true
n.reduce((ac, x) => ac + x, 0);       // 10  (suma)
```

### `reduce` paso a paso
`reduce((acumulador, elemento) => nuevoAcumulador, valorInicial)`
```js
[10, 30, 50].reduce((ac, x) => ac + x, 0);
// vuelta 1: ac=0   x=10 → 10
// vuelta 2: ac=10  x=30 → 40
// vuelta 3: ac=40  x=50 → 90      → resultado 90
```
- **Pon SIEMPRE valor inicial** (`0` para sumas, `[]` para construir arrays, `""` para textos, `{}` para objetos). Sin él, el 1er elemento hace de acumulador (y con array vacío da error).
- Dentro del callback **siempre `return` el acumulador** (si usas llaves `{}` y no haces `return`, el siguiente `ac` será `undefined`).

```js
// Recetas con reduce
const suma = arr.reduce((ac, x) => ac + x, 0);
const maximo = arr.reduce((ac, x) => Math.max(ac, x), -Infinity);
const factorial = n => Array.from({length: n}, (_, i) => i + 1).reduce((ac, x) => ac * x, 1);   // factorial(5)=120
const fibonacci = n => Array(n).fill(0).reduce((ac, _, i) => { ac.push(i < 2 ? i : ac[i-1] + ac[i-2]); return ac; }, []);  // 0,1,1,2,3,5...
const contar = arr.reduce((ac, x) => { ac[x] = (ac[x] || 0) + 1; return ac; }, {});     // frecuencias
```

### Encadenamiento (chaining) — ejemplos de las diapositivas
```js
const palabras = ["lunes", "martes", "luna", "mar", "la"];
// 1) palabras que empiezan por "l", en mayúsculas
palabras.filter(p => p.startsWith("l")).map(p => p.toUpperCase());    // ["LUNES","LUNA","LA"]
// 2) suma de longitudes de las palabras con menos de 3 letras
palabras.filter(p => p.length < 3).reduce((ac, p) => ac + p.length, 0);   // 2
```

### Ejemplo "Biblioteca" (tu `pra2Cliente.js`, versión limpia)
```js
let biblioteca = [libro1, libro2, libro4];
biblioteca = [...biblioteca, libro3];                                  // spread: añadir sin mutar
const checkPages  = libro => libro.npaginas > 150;                     // flecha de una línea (return implícito)
const largos      = biblioteca.filter(checkPages);
const contiene    = (bib, libro) => bib.some(l => l.nombre === libro.nombre);   // boolean
const porAutor    = (autor, bib) => bib.find(l => l.autor === autor);
console.log(porAutor("Tolkien", biblioteca) ? "Hay Tolkien" : "No hay Tolkien");  // ternario
const forrarTodos = bib => bib.forEach(l => l.forrado = true);
const prestar = (bib, titulo) => {
    const i = bib.findIndex(l => l.nombre === titulo);
    if (i !== -1) bib.splice(i, 1);          // ⚠️ sin el if, findIndex=-1 borraría el ÚLTIMO
};
const devolver = (bib, libro) => bib.push(libro);
```

---

<a id="bloque-4"></a>
# BLOQUE 4 — `Math` Y `Date`

## 4.1 `Math`

| | | |
|---|---|---|
| `Math.PI` / `Math.E` | 3.14159… / 2.718… | |
| `Math.abs(-5)` | `5` | valor absoluto |
| `Math.sin/cos/tan(x)` | trigonometría (radianes) | |
| `Math.exp(1)` / `Math.log(x)` | e^x / logaritmo natural | |
| `Math.ceil(2.1)` | `3` | redondea **arriba** |
| `Math.floor(2.9)` | `2` | redondea **abajo** |
| `Math.round(2.5)` | `3` | al más cercano (`.5` sube) |
| `Math.pow(2,3)` | `8` | (o `2 ** 3`) |
| `Math.min(4,1,7)` / `Math.max(...)` | `1` / `7` | con array: `Math.max(...arr)` |
| `Math.sqrt(25)` | `5` | raíz cuadrada |
| `Math.random()` | decimal en `[0, 1)` | **nunca llega a 1** |

**Aleatorios (copia y pega):**
```js
const aleatorio0aN   = n => Math.floor(Math.random() * n);                    // 0 .. n-1
const aleatorioMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;  // min..max INCLUIDOS
const elemAleatorio  = arr => arr[Math.floor(Math.random() * arr.length)];
const colorRGB = () => `rgb(${aleatorio0aN(256)}, ${aleatorio0aN(256)}, ${aleatorio0aN(256)})`;  // 0..255
// Ej: pasajeros 1..7 → aleatorioMinMax(1,7) · tara 0..9999 → aleatorioMinMax(0,9999) · "entre 1 y 4 coches" → aleatorioMinMax(1,4)
```

## 4.2 `Date`

**Crear fechas:**
```js
new Date();                                  // ahora
new Date(163128974231879);                   // desde milisegundos desde 1/1/1970
new Date("2004-02-06");                      // desde texto ISO (año-mes-día)
new Date(2024, 11, 27, 12, 21, 11, 201);     // (año, MES, día, h, min, s, ms)
Date.now();                                  // ms actuales (número)
Date.parse("2004-02-06");                    // ms de esa fecha
```

> # 🚨🚨 LOS MESES VAN DE 0 A 11 🚨🚨
> | 0 | 1 | 2 | 3 | 4 | **5** | 6 | 7 | **8** | 9 | 10 | 11 |
> |---|---|---|---|---|---|---|---|---|---|---|---|
> | Ene | Feb | Mar | Abr | May | **JUN** | Jul | Ago | **SEP** | Oct | Nov | Dic |
>
> - **30 de junio** = `new Date(año, 5, 30)` (en tu entrega pusiste `6` = julio ❌, y en el id restabas el mes sin sumar 1).
> - **1 de septiembre** = mes `8` → "curso nuevo si `getMonth() >= 8`".
> - Para **mostrar** el mes: `getMonth() + 1`. Para **crear** una fecha desde lo que escribe el usuario: `mes - 1`.
> - Si pasas mes `12` o día `32`, JS "desborda" y pasa al año/mes siguiente (no da error).

**Getters / setters:**

| Getter | Devuelve | Setter |
|---|---|---|
| `getFullYear()` | año (4 cifras) | `setFullYear(2006)` |
| `getMonth()` | mes **0–11** | `setMonth(7)` |
| `getDate()` | **día del mes 1–31** | `setDate(29)` |
| `getDay()` | **día de la semana: 0=Dom, 1=Lun … 6=Sáb** | ❌ no existe `setDay` |
| `getHours()` | 0–23 | `setHours(18)` |
| `getMinutes()` | 0–59 | `setMinutes()` |
| `getSeconds()` | 0–59 | `setSeconds()` |
| `getMilliseconds()` | 0–999 | `setMilliseconds()` |
| `getTime()` | ms desde 1970 | `setTime(ms)` |

> 🪤 `getDate()` (día del mes) **≠** `getDay()` (día de la semana). Con `new Date(...)` si restas dos fechas (`f2 - f1`) obtienes **milisegundos**. Los `Date` se pueden comparar con `<`, `>` pero **para igualdad usa `.getTime()`** (`f1 === f2` compara referencias).

### 5 recetas listas para copiar

```js
// 1) Sumar N días a hoy SIN modificar "hoy"
const hoy = new Date();
const fin = new Date(hoy);                    // copia
fin.setDate(hoy.getDate() + Number(dias));    // setDate gestiona solo cambios de mes/año

// 2) 30 de junio del curso académico actual (el curso empieza el 1 de septiembre)
const anioFin = hoy.getMonth() >= 8 ? hoy.getFullYear() + 1 : hoy.getFullYear();
const finCurso = new Date(anioFin, 5, 30);    // mes 5 = junio

// 3) Formatear dd/mm/yyyy y hh:mm:ss  (padStart pone el 0 delante: 5 → "05")
const dos = n => String(n).padStart(2, "0");
const fechaTxt = `${dos(f.getDate())}/${dos(f.getMonth() + 1)}/${f.getFullYear()}`;   // cambia "/" por "-" si piden dd-mm-yyyy
const horaTxt  = `${dos(f.getHours())}:${dos(f.getMinutes())}:${dos(f.getSeconds())}`; // capturaReloj()

// 4) Diferencia entre dos fechas
const MS_DIA = 1000 * 60 * 60 * 24;
const dias = Math.floor(Math.abs(f2 - f1) / MS_DIA);
const anios = Math.floor(dias / 365);
const meses = Math.floor((dias % 365) / 30);       // aproximado (meses de 30 días, como en tu ejercicio)
const resto = (dias % 365) % 30;

// 5) Próximos 5 cumpleaños y día de la semana
const nombresDia = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
let anio = hoy.getFullYear();
const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
if (new Date(anio, mes - 1, dia) < hoySinHora) anio++;          // si ya pasó este año, empieza el siguiente
for (let i = 0; i < 5; i++, anio++) {
    const cumple = new Date(anio, mes - 1, dia);
    console.log(`${dia}/${mes}/${anio} → ${nombresDia[cumple.getDay()]}`);
}
```

**Validar una fecha escrita `dd/mm/aa`** (ejercicio 2 de clase, versión corregida):
```js
function validarFecha(txt) {
    if (!txt) return false;
    const [dia, mes, anio] = txt.split("/").map(Number);      // desestructuración + map
    if ([dia, mes, anio].some(isNaN)) return false;
    return mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31 && String(anio).length <= 2; // (tu versión comparaba "> 1": error)
}
// si el año tiene 2 cifras: anio < 100 → 2000 + anio
```

---

<a id="bloque-5"></a>
# BLOQUE 5 — `Map` Y `Set`

## 5.1 ¿Cuál uso?

| Estructura | Úsala cuando… | Claves |
|---|---|---|
| `Array` | lista ordenada, acceso por posición | índices 0,1,2… |
| `Object` `{}` | registro con propiedades fijas (ficha) | solo texto/símbolo |
| **`Map`** | **diccionario** clave→valor, claves de cualquier tipo, orden de inserción | cualquier tipo (`1` ≠ `"1"`) |
| **`Set`** | **colección sin duplicados** | (solo valores) |

## 5.2 `Map`

```js
const mapa = new Map();                                          // vacío
const mapa2 = new Map([["clave1", "valor1"], ["clave2", "valor2"]]);   // con datos iniciales (array de pares)

mapa.set("213", { aula: aulaObj, grupo: "SMR2A" });   // añadir / sobrescribir
mapa.get("213");           // → el valor, o undefined si no existe
mapa.has("213");           // → true/false
mapa.delete("213");        // → true si existía
mapa.size;                 // nº de pares (PROPIEDAD, sin paréntesis)
mapa.clear();              // vaciar

mapa.keys();   mapa.values();   mapa.entries();   // iteradores (se consumen)
```

```js
// ✅ RECORRER un Map
for (const [clave, valor] of mapa) console.log(clave, valor);
for (const clave of mapa.keys()) {...}
for (const valor of mapa.values()) {...}
mapa.forEach((valor, clave) => {...});              // OJO: el orden es (valor, clave)

// ❌ for..in NO funciona con Map (no recorre nada)
```
- Respeta tipos: `mapa.set(1,"a")` y `mapa.get("1")` → `undefined`.
- Una clave `"213"` (texto) ≠ `213` (número): **usa siempre el mismo tipo** (tu `asignaciones` usa texto `"213"`).
- Ejemplo real (`DptoInformatica`):
```js
addAula(aula, grupo) {
    if (this.#aulas.has(aula.Numero)) return false;           // ya existe → false
    this.#aulas.set(aula.Numero, { aula: aula, grupo: grupo });
    return true;
}
getNEquipos() {
    let total = 0;
    for (const datos of this.#aulas.values()) total += datos.aula.Equipos.flat().length;   // flat() cuenta TODAS las celdas
    return total;
}
```

## 5.3 `Set`

```js
const s = new Set([1, 2, 2, 3, 3]);   // {1, 2, 3}  → elimina repetidos al crear
s.add(4);            // añadir (si ya está, no hace nada)
s.has(2);            // true
s.delete(2);         // quitar
s.size;              // nº de elementos
s.clear();           // vaciar
for (const v of s) console.log(v);    // recorrer con for..of (no for..in)
```
- Distingue tipos: `67` y `"67"` son valores distintos.
- Un `Set` **no tiene claves** (solo valores) y **no se accede por posición** (`s[0]` no existe).

**Quitar duplicados de un array** (reto de `probarSet.js`):
```js
const array = [100, 23, 23, 23, 23, 67, 45];
const unico = [...new Set(array)];                  // ✅ [100, 23, 67, 45]
const unico2 = Array.from(new Set(array));          // ✅ equivalente

const manual = [];                                  // versión sin Set
for (const x of array) if (!manual.includes(x)) manual.push(x);

// Del ejercicio "array sin repetidos y ordenado":
const limpio = [...new Set(arrayOrg)].sort((a, b) => a - b);
```

---

<a id="bloque-6"></a>
# BLOQUE 6 — EXPRESIONES REGULARES (REGEX)

Una regex es un **patrón** para comprobar/buscar texto. Se escribe entre barras: `/patrón/flags`.

```js
const r1 = /^[0-9]{5}$/;                 // literal (lo normal)
const r2 = new RegExp("^[0-9]{5}$");     // con constructor (el patrón va en texto: hay que doblar las \  → "\\d")
```

## 6.1 Piezas

| Pieza | Significa | Ejemplo |
|---|---|---|
| `^` | **inicio** del texto | `/^hola/.test("hola mundo")` → `true` |
| `$` | **fin** del texto | `/mundo$/.test("hola mundo")` → `true` |
| `^...$` | el texto **ENTERO** debe cumplir | validar campos (siempre ponlos) |
| `.` | cualquier carácter **menos salto de línea** (con flag `s` también ese) | `/a.b/.test("axb")` → `true` |
| `\.` | un punto **literal** | `/\./.test("a.b")` |
| `[abc]` | **uno** de esos caracteres | `/[abc]/.test("hola")` → `true` (la `a`) |
| `[a-z]` `[A-Z]` `[0-9]` | rangos | `/[0-12-3]/` → varios rangos juntos |
| `[^0-9]` | **ningún** de estos (negación **dentro** de corchetes) | `/^[^0-9]/.test("hola")` → `true` |
| `\d` / `\D` | dígito / **no** dígito | |
| `\w` / `\W` | letra, número o `_` / lo contrario | `\w` NO incluye tildes ni ñ |
| `\s` / `\S` | espacio, tab, **salto de línea** / lo contrario | |
| `\n` `\t` | salto de línea / tabulador | |
| `\uXXXX` | carácter Unicode | `\u00f1` = ñ |
| `a\|b` | **o** | `/^(gato\|perro)$/` |
| `( )` | grupo (y captura) | `/(\d+)-(\d+)/.exec("10-20")` → `["10-20","10","20"]` |

**Cuantificadores** (se ponen DESPUÉS de lo que repiten):

| | Significa | |
|---|---|---|
| `?` | 0 o 1 (opcional) | `/colou?r/` |
| `*` | 0 o más | `/^h.*o$/.test("ho")` → `true` |
| `+` | **1 o más** | `/^h.+o$/.test("ho")` → `false` (necesita al menos 1 en medio) |
| `{3}` | exactamente 3 | `/\d{3}/` |
| `{3,7}` | entre 3 y 7 | |
| `{3,}` | 3 o más | |
| `{0,3}` | hasta 3 (❌ `{,3}` **NO vale** en JS) | |

**Flags:** `i` ignora mayúsculas · `g` todas las coincidencias · `s` el `.` incluye saltos de línea.

> 🪤 Corchetes = **un solo** carácter de ese conjunto. `/[a-d]/.test("hola mundo")` solo mira si **alguno** está. Para que **todo** el texto cumpla: `/^[a-d]+$/`.
> 🪤 `/^a$/.test("aa")` → `false`. Con `^...$` el texto es exacto.

## 6.2 Métodos

| Método | Devuelve | Uso |
|---|---|---|
| `regex.test(texto)` | `true` / `false` | **validar** |
| `texto.match(regex)` | array de coincidencias (con `g`) o `null` | extraer / contar |
| `regex.exec(texto)` | array con grupos (1ª coincidencia) o `null` | capturas |
| `texto.replace(regex, nuevo)` | texto nuevo (con `g`, todas) | sustituir |
| `texto.split(regex)` | array | `"a  b   c".split(/\s+/)` → `["a","b","c"]` |
| `texto.search(regex)` | posición o `-1` | |

```js
"En un lugar".match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]+/g);   // palabras (sin signos de puntuación)
(texto.match(/e/g) || []).length;                // contar letras "e" (|| [] evita error si no hay)
"a1b22".replace(/\d/g, "#");                     // "a#b##"

// --- Ejemplos de las diapositivas (ExpresionesRegulares.pdf) ---
const re1 = new RegExp("hola"), re2 = /hola/;                 // objeto o literal: equivalentes
re2.test("hola mundo");                                       // true  · re2.test("hello mundo") → false
/^hello|^hola/.test("hola mundo");                            // true  ("|" = o)
/^[0-9]|o$/.test("hola mundo");                               // true  (acaba en "o")
/^a\d?/.test("ab3");  /^a\d?$/.test("ab3");                   // true · false
/\d{3}/.test("h34a");  /\d{3}/.test("h346a");                 // false · true
/[a-c]{3,}/.test("--cab--");                                  // true ({n,} = al menos n)
/(abc){2}(.\d)/.test("--abcabcx4--");                         // true: (abc) DOS veces seguido de (cualquier carácter + dígito)
const r = "--abcabcx4--".match(/(abc){2}(.\d)/);
r[0];  r[1];  r[2];                                           // "abcabcx4" (todo) · "abc" (1er grupo) · "x4" (2º grupo)
"My dog is a good dog".replace("dog", "cat");                 // "My cat is a good dog"  (solo la 1ª)
"My dog is a good dog".replace(/dog/g, "cat");                // "My cat is a good cat"  (g = todas)
"My dog is a good. My cat is a good.".replace(/(dog|cat)/g, "pet");   // "My pet is a good. My pet is a good."
"AAAssAAssxAkkkkAAAAAA".replace(/A{2,}/g, "B");               // "BssBssxAkkkkB"  (2 o más A seguidas → B)
```

## 6.3 📚 Catálogo de regex listas para copiar (las de tu `ejExpReg.js`, validadas)

| Campo | Regex | Cumple | No cumple |
|---|---|---|---|
| Nombre / apellidos (empieza en mayúscula, admite varias palabras) | `/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]*( [A-Za-záéíóúñ]+)*$/` | `Ana`, `Ana Maria` | `ana`, `Ana1` |
| Edad (1–3 dígitos) | `/^\d{1,3}$/` | `22` | `abc`, `1234` |
| Email | `/^[\w.-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/` | `a_b@mail.com` | `a@b` |
| Teléfono español (empieza 6, 7 o 9; 9 cifras) | `/^[679]\d{8}$/` | `612345678` | `512345678` |
| Código postal | `/^\d{5}$/` | `47001` | `4700` |
| DNI | `/^\d{8}[A-Za-z]$/` | `12345678Z` | `1234567Z` |
| Matrícula coche | `/^\d{4}[A-Z]{3}$/i` | `8948RGH` | `894RGH` |
| Curso (1 o 2) | `/^[12]$/` | `1` | `3` |
| Año 1900–2099 | `/^(19\|20)\d{2}$/` | `2004` | `1850` |
| Observaciones (0–120 caracteres) | `/^.{0,120}$/` | `""` | texto >120 |
| Centro (5–120 caracteres) | `/^.{5,120}$/` | | |
| Empieza por V o C | `/^[VC]/i` | `Valladolid`, `cadiz` | `Sevilla` |
| Solo letras con tildes | `/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/` | | |
| Fecha `dd/mm/aaaa` | `/^\d{2}\/\d{2}\/\d{4}$/` | `06/01/2004` | `6/1/04` |
| Solo dígitos | `/^\d+$/` | | |

**Función `comprobar` (la del examen de clase):**
```js
function comprobar(titulo, dato, expr) {
    const ok = expr.test(dato || "");          // dato || "" evita "null" si el usuario cancela el prompt
    document.write(`<p>${titulo}: ${ok}${ok ? "" : " - El campo no cumple con las especificaciones."}</p>`);
}
comprobar("Teléfono", prompt("Teléfono:"), /^[679]\d{8}$/);
```

**Clasificar un CSV desordenado** (tu `72ExpRegCSV.js`): para cada celda, pregunta qué es con `test` y colócala en su columna.
```js
const esDni = v => /^\d{8}[A-Z]$/i.test(v);
const esTel = v => /^\d{9}$/.test(v);
const esCp  = v => /^\d{5}$/.test(v);
const esCod = v => /^\d{4}[A-Z]{3}$/i.test(v);
const esNombre = v => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(v);
// recorre cadenaCSV.split(","), usa .trim(); cuando sea nombre abre fila nueva; si no, colócalo en su columna
```

**Separar palabras por longitud** (tu `69expReg.js`):
```js
const palabras = texto.match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]+/g);
const porLongitud = { 1: [], 2: [], 3: [], 4: [], 5: [], mas: [] };
for (const p of palabras) (p.length <= 5 ? porLongitud[p.length] : porLongitud.mas).push(p);
```

---

<a id="bloque-7"></a>
# BLOQUE 7 — FUNCIONES, ARROW, REST/SPREAD Y DESESTRUCTURACIÓN

## 7.1 Tipos de función

```js
function saludar(nombre) { return `Hola ${nombre}`; }          // nombrada → se puede llamar ANTES de declararla
const saludar2 = function (nombre) { return `Hola ${nombre}`; }; // anónima en variable → solo DESPUÉS
const saludar3 = nombre => `Hola ${nombre}`;                    // flecha
```

- **Callback**: función que pasas como argumento a otra (`setTimeout(fn, 1000)`, `arr.map(fn)`).
- **Orden superior**: recibe o devuelve funciones.
- **Función pura**: no toca nada de fuera y no modifica sus parámetros (mismos datos → mismo resultado).
- **Anidada**: función dentro de otra (en JS se puede).
- ⚠️ Si pasas una función **sin paréntesis** → pasas la función. **Con paréntesis** → la ejecutas y pasas su resultado: `setTimeout(saludar, 1000)` ✅ · `setTimeout(saludar(), 1000)` ❌.

## 7.2 Parámetros

```js
function f(nombre, edad) { console.log(nombre, edad); }
f("Pepe");                 // "Pepe", undefined   → JS NO valida el nº de parámetros
f("Pepe", 30, "extra");    // el 3º se ignora (pero está en arguments)

function g(nombre = "Paco", edad = 18) { ... }     // valores por defecto (solo se usan si llega undefined)

function suma() { let t = 0; for (let i = 0; i < arguments.length; i++) t += arguments[i]; return t; }  // arguments (antiguo)
```

### Rest `...` (en la **definición**: agrupa en un array) — siempre el ÚLTIMO parámetro
```js
function suma2(...nums) { return nums.reduce((ac, x) => ac + x, 0); }     // nums es un array de verdad
suma2(1, 2, 3);                                                            // 6
function aniade(nombre, ...apellidos) { return [nombre, ...apellidos].join(" "); }
```

### Spread `...` (en la **llamada / literal**: expande un iterable)
```js
const v = [1, 2, 3];
suma2(...v);                        // = suma2(1, 2, 3)
const copia = [...v];               // copia independiente
const union = [...v, 4, 5];         // añadir sin mutar
const sinMutar = [0, ...v];         // [0, 1, 2, 3]   (sin los ... meterías el array ENTERO como 1 elemento)
Math.max(...v);                     // 3
[..."hola"];                        // ["h","o","l","a"]

const persona = { nombre: "Pepe", edad: 27 };
const cliente = { ventas: 120, ...persona };        // spread de OBJETOS (ES2018) → copia las propiedades
const copiaObj = { ...cliente };                    // copia superficial
// ❌ f(...objeto) no vale: en llamadas a funciones solo con iterables
```
> **Rest = juntar (definición) · Spread = repartir (uso).**

## 7.3 Arrow functions

```js
(a, b) => a + b                  // return implícito (una expresión, SIN llaves)
a => a * 2                       // un solo parámetro: paréntesis opcionales
() => "hola"                     // sin parámetros: paréntesis obligatorios
(a, b) => { const c = a + b; return c; }     // con llaves → hay que escribir return
x => ({ id: x })                 // devolver un OBJETO literal → entre paréntesis
```
🪤 **El fallo clásico:**
```js
b.filter(e => { e > 2 });       // ❌ con llaves y sin return → devuelve undefined → filter da []
b.filter(e => e > 2);           // ✅
b.filter(e => { return e > 2; });  // ✅
```
- En arrow functions `this` es el del contexto de fuera (no tienen `this` propio).

## 7.4 Recursividad
Plantilla: **caso base** (para) + **llamada a sí misma** con un problema más pequeño.
```js
const esPar = n => n === 0 ? true : n === 1 ? false : esPar(n - 2);

const palindromo = p => {
    p = p.toLowerCase();
    if (p.length <= 1) return true;                              // caso base
    if (p[0] !== p[p.length - 1]) return false;                  // caso base
    return palindromo(p.slice(1, -1));                           // recursión (sin 1ª y última letra)
};
const factorialRec = n => n <= 1 ? 1 : n * factorialRec(n - 1);
```

## 7.5 ⭐ Desestructuración (sacar valores a variables)

### Arrays (por **posición**)
```js
const array = ["Jose", "Pérez", 2345678, 3456789];
const [nombre, apellido] = array;               // nombre="Jose", apellido="Pérez"
const [primero, , tercero] = array;             // saltar con una coma vacía → tercero=2345678
const [n, , ...telefonos] = array;              // rest: telefonos = [2345678, 3456789]
const [a, b, c, d, e = "Hector"] = array;       // valor por defecto (si el elemento no existe → undefined → usa el default)
let x = 1, y = 2;
[x, y] = [y, x];                                // INTERCAMBIAR variables (x=2, y=1)
let p, q; [p, q] = [10, 20];                    // sobre variables que YA existen: sin const/let
```

### Objetos (por **nombre** de propiedad)
```js
const persona = { nombre: "Pepe", edad: 23, pais: undefined, apellidos: ["García", "Pérez"] };
const { nombre, edad } = persona;                      // variables con el mismo nombre que las propiedades
const { nombre: firstName, edad: years } = persona;    // RENOMBRAR → firstName, years  (la variable "nombre" NO se crea)
const { pais = "España" } = persona;                   // valor por defecto
const { nombre: n2, pais: country = "España" } = persona;   // renombrar + default

let nombre2, edad2;
({ nombre: nombre2, edad: edad2 } = persona);          // sobre variables existentes: SIN const y ENTRE PARÉNTESIS

// ANIDADA (objeto dentro de objeto / array dentro de objeto)
const { apellidos: [apellido1, apellido2] } = persona;       // apellido1="García", apellido2="Pérez"
const { direccion: { calle, ciudad } } = { direccion: { calle: "Mayor", ciudad: "León" } };

// En los parámetros de una función
function verDatos({ nombre = "Daniel", edad = 22 } = {}) {   // el "= {}" final permite llamar verDatos() sin argumentos
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
verDatos(persona);          // Nombre: Pepe, Edad: 23
verDatos({ nombre: "Ana" });// Nombre: Ana, Edad: 22
verDatos();                 // Nombre: Daniel, Edad: 22
```
| Arrays | Objetos |
|---|---|
| `[ ]` por **posición** | `{ }` por **nombre** |
| saltar: `[a, , c]` | saltar: simplemente no lo nombras |
| renombrar: libre (tú eliges) | renombrar: `{ propiedad: nuevoNombre }` |
| existentes: `[a, b] = ...` | existentes: `({ a, b } = ...)` con paréntesis |

---

<a id="bloque-8"></a>
# BLOQUE 8 — OBJETOS, PROTOTIPOS, CLASES, HERENCIA Y MÓDULOS

## 8.1 Objetos literales

```js
const o = {
    nombre: "Pepe",
    "nombre completo": "Pepe García",       // propiedad con espacios → entre comillas
    edad: 30,                                // se permite coma final
    saludar() { return `Hola ${this.nombre}`; },        // método (forma corta; = saludar: function(){...})
    toString() { return `${this.nombre} (${this.edad})`; }   // console.log(`${o}`) / String(o) lo usa
};
o.nombre;                    // acceso con punto (lo normal)
o["nombre completo"];        // acceso con corchetes (espacios o clave en variable): o[variable]
o.apellido;                  // undefined si no existe
delete o.edad;               // borrar propiedad
"nombre" in o;               // true  → ¿existe la propiedad?
o.hasOwnProperty("nombre");  // true → ¿es PROPIA (no heredada)?

const k = "color";
const p = { [k]: "rojo", ["id" + 1]: 7 };   // propiedades CALCULADAS → { color: "rojo", id1: 7 }
```
- **Todas las propiedades son públicas.** (Lo privado real solo existe en clases con `#`.)
- Un objeto se pasa/asigna **por referencia**: `const b = a;` no copia.

**Recorrer y copiar:**
```js
for (const k in o) console.log(k, o[k]);              // for..in → claves
Object.keys(o);  Object.values(o);  Object.entries(o);   // arrays de claves / valores / pares [k, v]
for (const [k, v] of Object.entries(o)) {...}         // for..of con entries ✅
const clon1 = { ...o };                               // clonar (spread)
const clon2 = Object.assign({}, o, otro);             // clonar/combinar (el 1º es el destino)
Object.assign(o, otro);                               // ⚠️ MODIFICA o (no crea uno nuevo)
```

**Construir objetos desde dos arrays (ejercicio `pruebasObj.js`):**
```js
const props = ["id", "nombre", "edad"]; const vals = [1, "Luis", 43];
const persona = {};
props.forEach((p, i) => persona[p] = vals[i]);
```

## 8.2 Prototipos y delegación

Todo objeto tiene un **prototipo** (otro objeto del que hereda). Cadena: `objeto → prototipo → … → Object.prototype → null`. Si pides una propiedad que el objeto no tiene, JS la busca **hacia arriba**; si no está en ninguno → `undefined`.

```js
const person  = { name: "Paco", age: 30 };
const student = { course: "A" };
Object.setPrototypeOf(student, person);          // student delega en person
student.name;                                    // "Paco" (heredada)
student.name = "Pepe";                           // crea propiedad PROPIA en student (sombrea la de person)
person.name;                                     // sigue "Paco"
Object.getPrototypeOf(student) === person;       // true

const s2 = Object.create(person);                // crea un objeto nuevo con ese prototipo (lo más usado)
s2.course = "B";
Object.assign(s2, { extra: 1 });                 // añade propiedades de otros objetos
```
- Recomendado: `Object.getPrototypeOf` / `Object.setPrototypeOf` (`__proto__` es antiguo).
- Se pueden **sombrear** propiedades heredadas con el mismo nombre.

**Método en objeto delegado** (composición):
```js
const persona = { visualizar() { console.log(this); } };
const estudiante = Object.create(persona);
estudiante.nombre = "Pedro";
estudiante.visualizar();        // this = estudiante (el que llama, no persona)
```

**Función constructora (forma antigua de hacer "clases")** — nombre con Mayúscula + `new`:
```js
function Persona(nombre, edad) { this.nombre = nombre; this.edad = edad; }
Persona.prototype.visualizar = function () { console.log(this.nombre); };   // método compartido (eficiente)
const p = new Persona("Ana", 20);
// Herencia por prototipo: los objetos creados con Persona delegan en serVivo
Persona.prototype = serVivo;      // (hazlo ANTES de crear instancias)
```
- Si añades el método dentro de la función (`this.visualizar = function(){}`), se **copia en cada objeto** → ineficiente.
- `prototype` solo existe en funciones constructoras.

**Ejemplo ajedrez (tu `ajedrez.js`, corregido y completo):**
```js
const tablero = Array.from({ length: 8 }, () => Array(8).fill(null));
const figura = { x: 0, y: 0, moverA(x, y) { this.x = x; this.y = y; } };

const tipos = ["K", "Q", "T", "T", "A", "A", "C", "C", ...Array(8).fill("P")];   // 16 piezas
const figuras = tipos.map(tipo => {
    const f = Object.create(figura);       // objeto delegado de "figura"
    f.tipo = tipo;
    return f;
});

function colocarPieza(f, tablero) {
    let x, y;
    do { x = Math.floor(Math.random() * 8); y = Math.floor(Math.random() * 8); }
    while (tablero[x][y] !== null);        // repetir hasta casilla libre (tu versión usaba !== undefined con huecos)
    f.moverA(x, y);
    tablero[x][y] = f.tipo;
}
figuras.forEach(f => colocarPieza(f, tablero));
console.table(tablero);
```

## 8.3 ⭐ CLASES (ES6) — lo que más cae

```js
class Persona {
    constructor(nombre, apellidos, dni) {     // se ejecuta con new Persona(...)
        this.nombre = nombre;                 // propiedad pública
        this.apellidos = apellidos;
        this.dni = dni;
    }
    saludar() { return `Hola, soy ${this.nombre}`; }     // método (va al prototipo, compartido)
}
const p = new Persona("Ana", "Gil", "123");      // SIEMPRE con new
```
`class` es "azúcar sintáctico": por debajo sigue siendo función constructora + prototipos.

### Privados: `#campo` (el que usa Laura/R4/Edificio) vs `_campo`
```js
class Cuenta {
    #saldo = 0;                       // privado REAL: fuera de la clase da SyntaxError
    _tipo = "ahorro";                 // convención (slide 19): "no tocar", pero accesible
    ingresar(c) { this.#saldo += c; }
    get Saldo() { return this.#saldo; }
    #interno() { ... }                // método privado
}
```
🪤 Hay que **declarar** `#saldo;` arriba. `this.#saldo` fuera de la clase → error. `obj.#saldo` no existe fuera.

### Getters y setters
```js
class Edificio {
    #calle;
    constructor(calle = "Sin nombre") { this.#calle = calle; }
    get Calle() { return this.#calle; }               // uso:  e.Calle           (SIN paréntesis)
    set Calle(valor) { this.#calle = valor; }         // uso:  e.Calle = "Mayor" (como asignación)
}
```
- Solo `get` → **solo lectura**. Solo `set` → solo escritura.
- 🪤 `e.Calle()` ❌ (no es método) · `e.Calle` ✅.
- Mayúsculas: respeta las del enunciado/pruebas (`Calle` ≠ `calle`).
- Si el getter se llama igual que el campo (`get nombre()` y `this.nombre`) → **bucle infinito**. Por eso se usa `#nombre` + `get Nombre()` (o `_nombre`).

### Constructor con opcionales y valores por defecto
```js
constructor(descripcion, personal, dias) {         // dias es OPCIONAL: si no llega es undefined
    this.#descripcion = descripcion;               // ORDEN: asigna primero lo que usarán los métodos de abajo
    this.#personal = personal;
    this.#fecha = this.#calcularFecha(dias);       // 1º la fecha...
    this.#id = this.#generarId();                  // ...2º el id (usa fecha y descripcion)
}
```
🪤 Si llamas a `this.#generarId()` antes de asignar `this.#fecha`/`#descripcion`, estarán `undefined` → `TypeError`.

### Métodos estáticos
```js
class Persona {
    static contador = 0;
    static crearPersona(n) { return new this(n); }    // factoría: "this" es la propia clase
    static comparar(a, b) { return a.nombre.localeCompare(b.nombre); }
}
Persona.crearPersona("Ana");       // se llama con la CLASE, no con la instancia
// persona.crearPersona() ❌  (no existe en instancias)
```

### Herencia: `extends` + `super`
```js
class Alumno extends Persona {
    constructor(nombre, apellidos, dni, asignaturas) {
        super(nombre, apellidos, dni);      // 🔴 OBLIGATORIO y ANTES de usar this
        this.asignaturas = asignaturas;
    }
    saludar() {                              // sobrescribe (sombrea) el del padre
        return super.saludar() + " y soy alumno";   // llama al del padre
    }
    entregarEjercicio(n, profesor) { ... }
}
const a = new Alumno("Dani", "SM", "7", ["Cliente"]);
a instanceof Alumno;   // true
a instanceof Persona;  // true
```
- Si la hija no tiene `constructor`, usa el del padre.
- Las propiedades `#privadas` del padre **NO** son accesibles desde la hija (usa getters del padre).
- Ejemplo de clase: `Vehiculo → Turismo / Camion` (Bloque 10).

## 8.4 ⭐ MÓDULOS (`import` / `export`) — cómo organizar en ficheros

**`equipo.js`**
```js
"use strict";
export class Equipo { ... }                      // export con nombre
```
**`principal_prueba.js`**
```js
import { Equipo } from "./equipo.js";            // 🔴 con ./ y con la extensión .js
import { Aula } from "./aula.js";
import { DptoInformatica } from "./dptoInformatica.js";
```
**`index.html`**
```html
<script type="module" src="./principal_prueba.js"></script>
```
Checklist de módulos:
1. `type="module"` en el `<script>` (**solo** el principal; los demás se importan).
2. `export` delante de cada clase (o `export { A, B };` al final).
3. `import { Nombre }` → el nombre debe ser **idéntico** (mayúsculas) al de la clase exportada.
4. Ruta con `./` y `.js`.
5. Abrir con **Live Server** (con doble clic en `file://` da error CORS).
6. En módulos, `"use strict"` ya va activado, y las variables **no** son globales (`window`).
7. `export default class X {}` → se importa **sin llaves**: `import X from "./x.js";`

---

<a id="bloque-9"></a>
# BLOQUE 9 — NAVEGADOR: `prompt`, DOM, TEMPORIZADORES, DEBUG

## 9.1 Diálogos

```js
alert("mensaje");                                  // aviso
const nombre = prompt("¿Nombre?");                 // devuelve STRING, o null si cancela
const ok = confirm("¿Seguro?");                    // true / false
```
```js
let filas = parseInt(prompt("Filas:"), 10);        // prompt devuelve TEXTO → convertir a número
if (isNaN(filas)) { ... }
// Con null: si pulsa Cancelar → null → .trim() daría TypeError. Comprueba antes:
const dato = prompt("Aula (S para salir):");
if (dato === null || dato.trim().toUpperCase() === "S") { /* salir */ }
```

**Pedir datos hasta que escriba "S"** (plantilla `datosPortatiles`):
```js
function datosPortatiles() {
    while (true) {
        const aula = prompt("Aula destino (ej. 220) o S para salir:");
        if (aula === null || aula.trim().toUpperCase() === "S") break;
        const descripcion = prompt("Descripción:");
        const fila = parseInt(prompt("Fila:"), 10);
        const columna = parseInt(prompt("Columna:"), 10);
        const dias = parseInt(prompt("Nº días:"), 10);
        // ... usar los datos ...
    }
}
```

## 9.2 Pintar en la página

| Forma | Ejemplo | Notas |
|---|---|---|
| `document.write(html)` | `document.write("<p>Hola</p>")` | escribe **donde está el script**. Si se ejecuta tras cargar la página (en un `setInterval`/clic) **borra toda la página**. OK para ejercicios simples y tablas |
| `innerHTML` | `document.getElementById("salida").innerHTML += "<p>Hola</p>"` | interpreta HTML |
| `textContent` | `el.textContent += "texto\n"` | solo texto (más seguro) |

```js
// Con += se AÑADE; con = se SOBREESCRIBE todo lo anterior (apunte tuyo del 06/10)
const div = document.getElementById("array");      // el id debe existir en el HTML
div.innerHTML += `<p>${x}</p>`;
```
```html
<div id="array"></div>
<script src="ej1.js"></script>        <!-- el script debajo del div, o en <head> con defer -->
<script src="ej1.js" defer></script>  <!-- defer: espera a que cargue el HTML -->
```
**Tabla HTML con `document.write` (ejercicio 1):**
```js
document.write("<table border='1'>");
for (let i = 0; i < filas; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnas; j++) document.write(`<td>${i},${j}</td>`);
    document.write("</tr>");
}
document.write("</table>");
```
**Posicionar elementos aleatorios (ej. meses de colores):** el contenedor con `position: relative` (¡ojo, tu HTML puso `reletive`!) y cada hijo `position: absolute; left: ..px; top: ..px; background-color: rgb(r,g,b);`.

## 9.3 `setTimeout` / `setInterval`

```js
setTimeout(() => console.log("pasaron 2s"), 2000);        // UNA vez tras 2000 ms
const id = setInterval(() => { ... }, 2000);               // CADA 2000 ms, devuelve un id
clearInterval(id);                                         // parar el intervalo
```
**Patrón: ejecutar 10 veces cada 2 segundos y parar** (ejercicio de vehículos):
```js
let veces = 0;
const id = setInterval(() => {
    capturaReloj(); generarVehiculos(); mostrarVehiculos();
    veces++;
    if (veces === 10) clearInterval(id);       // 🔴 sin esto no para nunca
}, 2000);
```
- Segundos → milisegundos: `× 1000`.
- `setInterval(funcion, ms)`: pasa la función **sin `()`**.
- Con `document.write` dentro de un intervalo se borra la página → usa `innerHTML +=` sobre un `div`.

## 9.4 Depuración (debug)

**En VS Code:** clic a la izquierda del número de línea → **breakpoint** (punto rojo) → `F5` ejecutar con depurador → `F10` siguiente línea · `F11` entrar en la función · `F5/F8` continuar al siguiente breakpoint · panel **Variables** (izquierda) y **Watch** para ver valores · consola de depuración.
**En el navegador:** `F12` → pestaña **Sources** (breakpoints, igual que VS Code; `F10` paso, `F8` reanudar; **Scope → Local** muestra variables; pasar el ratón sobre una variable muestra su valor) · **Event Listener Breakpoints → Mouse → click** para parar en un clic · pestaña **Console** para errores y `console.log` · escribir **`debugger;`** en el código para que pare solo (con DevTools abiertas).

`console.log(x)` · `console.table(matriz)` · `console.warn()` · `console.error()` · `console.log("%cTexto", "background:#222;color:#bada55")` (estilos).
Ejemplo de tu `holaMundo.js`: `x / 0` → `Infinity` (no da error): el debug ayuda a ver por qué `w = 0`.

**Atajos VS Code más útiles (de tu Tarea1):**

| Atajo | Hace |
|---|---|
| **`Shift + Alt + F`** | **Formatear/tabular todo el documento** (úsalo antes de entregar: "no se corregirá ninguna tarea mal tabulada") |
| `Ctrl + /` | comentar/descomentar línea |
| `Shift + Alt + A` | comentar bloque `/* */` |
| `Alt + ↑/↓` | mover línea |
| `Ctrl + D` | seleccionar siguiente coincidencia |
| `Ctrl + Shift + L` | seleccionar **todas** las coincidencias |
| `F2` | renombrar símbolo en todo el proyecto |
| `F12` / `Ctrl + clic` | ir a la definición |
| `Ctrl + F` / `Ctrl + H` | buscar / reemplazar |
| `Ctrl + Shift + P` | paleta de comandos |
| `Ctrl + Shift + K` | borrar línea |
| `Ctrl + ,` | ajustes |
| `Ctrl + B` / `Ctrl + J` | ocultar sidebar / panel inferior |

**Apuntes de clase (15/09):** el navegador solo entiende HTML; JS **no puede guardar nada en el servidor**, le envía los datos y el servidor los guarda; se despliegan cliente y servidor; HTML pasa por el navegador, programas pequeños no.

---

<a id="bloque-10"></a>
# BLOQUE 10 — EJERCICIOS COMPLETOS RESUELTOS (PLANTILLAS PARA ADAPTAR)

> Todas están **probadas** (ejecutadas en Node con `prompt` simulado). Cambia nombres/campos según el enunciado.
> Cada fichero lleva un comentario `// FILE: nombre.js`.

## 10.1 PRUEBA PRÁCTICA R4 — Equipos / Aulas / Departamento (la que tienes en la carpeta)

**Cosas que el enunciado exige (y que fallaban en tu entrega):**
- Clases `Equipo`, `Aula`, `DptoInformatica` (nombres exactos, con `export`) y `import` con `./x.js`.
- Getters con **Mayúscula** porque la prueba usa `aula.Numero`, `dpto.Aulas`, `aula.Equipos`, `equipo.Id`.
- `id` = `X-ZZZ-dd-mm-yyyy` → `P`/`S` + últimos 3 caracteres de la descripción + fecha **dd-mm-yyyy** (con mes **+1** y ceros). *(Las capturas del PDF mezclan `/` y `-`; usa el separador que diga el texto del enunciado `dd-mm-yyyy`.)*
- Fecha por defecto: **30 de junio** del curso actual (curso empieza 1 sept → `getMonth() >= 8` ⇒ año siguiente).
- Portátil (`personal === true`): se **inserta desplazando** (`splice`) y puede sobrepasar columnas, no filas. Sobremesa: debe existir la posición.
- `getNEquipos()` cuenta **todas las celdas** (usadas o no): 7 aulas × 5×4 = **140**.
- Ocupación = equipos no-`null` / puestos × 100 (con el portátil: 21/20 = **105 %**).

```js
// FILE: equipo.js
"use strict";
export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion, personal, dias) {          // dias OPCIONAL (sin corchetes)
        this.#descripcion = descripcion;                 // 1º lo que usan los métodos privados
        this.#personal = personal;
        this.#fecha = this.#calcularFecha(dias);
        this.#id = this.#generarId();
    }

    get Id() { return this.#id; }
    get Fecha() { return this.#fecha; }
    get Descripcion() { return this.#descripcion; }
    get Personal() { return this.#personal; }
    set Descripcion(v) { this.#descripcion = v; }
    set Personal(v) { this.#personal = v; }

    #calcularFecha(dias) {
        const hoy = new Date();
        if (dias !== undefined && dias !== null && !isNaN(dias)) {
            const fin = new Date(hoy);
            fin.setDate(hoy.getDate() + Number(dias));          // sumar días SIN tocar "hoy"
            return fin;
        }
        const anioFin = hoy.getMonth() >= 8 ? hoy.getFullYear() + 1 : hoy.getFullYear();
        return new Date(anioFin, 5, 30);                        // mes 5 = JUNIO
    }

    #generarId() {
        const tipo = this.#personal ? "P" : "S";
        const zzz = this.#descripcion.slice(-3);
        const dd = String(this.#fecha.getDate()).padStart(2, "0");
        const mm = String(this.#fecha.getMonth() + 1).padStart(2, "0");   // +1: los meses van de 0 a 11
        const yyyy = this.#fecha.getFullYear();
        return `${tipo}-${zzz}-${dd}-${mm}-${yyyy}`;
    }

    toString() { return this.#id; }
}
```

```js
// FILE: aula.js
"use strict";
import { Equipo } from "./equipo.js";      // (solo si lo necesitas; aquí no es imprescindible)

export class Aula {
    #numero;
    #equipos;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#puestos = filas * columnas;
        this.#equipos = Array.from({ length: filas }, () => Array(columnas).fill(null));
    }

    get Numero() { return this.#numero; }
    get Equipos() { return this.#equipos; }
    get Puestos() { return this.#puestos; }
    set Numero(v) { this.#numero = v; }

    activaEquipo(equipo, fila, columna) {
        if (fila < 0 || fila >= this.#equipos.length || columna < 0) return false;   // la FILA nunca se puede sobrepasar
        if (equipo.Personal) {
            // portátil: puede sobrepasar columnas → se inserta desplazando el resto
            this.#equipos[fila].splice(columna, 0, equipo);
            return true;
        }
        // sobremesa: la posición debe existir
        if (columna >= this.#equipos[fila].length) return false;
        this.#equipos[fila][columna] = equipo;
        return true;
    }

    getPosicion(idEquipo) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j] !== null && this.#equipos[i][j].Id === idEquipo) {
                    return [i, j];                  // ✅ [i, j]  (NO [i][j])
                }
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        const activos = this.#equipos.flat().filter(e => e !== null).length;
        return Math.round((activos / this.#puestos) * 100);
    }
}
```

```js
// FILE: dptoInformatica.js
"use strict";
export class DptoInformatica {
    #aulas;

    constructor() { this.#aulas = new Map(); }

    get Aulas() { return this.#aulas; }

    addAula(aula, grupo) {
        if (this.#aulas.has(aula.Numero)) return false;
        this.#aulas.set(aula.Numero, { aula: aula, grupo: grupo });
        return true;
    }

    getUbicacion(idEquipo) {
        for (const [numero, datos] of this.#aulas) {
            const pos = datos.aula.getPosicion(idEquipo);
            if (pos !== null) return `Aula número: ${numero}, Fila: ${pos[0]}, Columna: ${pos[1]}`;
        }
        return "Equipo desconocido";
    }

    getNEquipos() {
        let total = 0;
        for (const datos of this.#aulas.values()) total += datos.aula.Equipos.flat().length;
        return total;
    }
}
```

```js
// FILE: principal_prueba.js
import { Equipo } from "./equipo.js";
import { Aula } from "./aula.js";
import { DptoInformatica } from "./dptoInformatica.js";

const FILAS = 5;
const COLUMNAS = 4;

const dptoNaranco = new DptoInformatica();
const asignaciones = [
    { aula: "213", grupo: "SMR2A" }, { aula: "214", grupo: "IOF2" },
    { aula: "215", grupo: "DAW2A" }, { aula: "216", grupo: "SMR1A" },
    { aula: "217", grupo: "DAM1A" }, { aula: "218", grupo: "DAM2A" },
    { aula: "220", grupo: "IOF1" }
];
asignaciones.forEach(a => {
    console.log(dptoNaranco.addAula(new Aula(a.aula, FILAS, COLUMNAS), a.grupo)
        ? "Se ha insertado el aula " + a.aula : "No se ha podido insertar el aula " + a.aula);
});
console.log("RECUENTO TOTAL EQUIPOS: " + dptoNaranco.getNEquipos() + " equipos");   // 140

asignaciones.forEach(a => {
    const aula = dptoNaranco.Aulas.get(a.aula).aula;
    for (let i = 0; i < FILAS; i++)
        for (let j = 0; j < COLUMNAS; j++)
            aula.activaEquipo(new Equipo("Descripción equipo " + aula.Numero + "-" + i + "-" + j, false), i, j);
});
asignaciones.forEach(a => {
    const aula = dptoNaranco.Aulas.get(a.aula).aula;
    console.table(aula.Equipos);
    console.log("Ocupación aula " + a.aula + ": " + aula.getPorcentajeOcupacion() + "%");
});

function datosPortatiles() {
    while (true) {
        const aulaDestino = prompt("Aula destino (ej. 220) o S para salir:");
        if (aulaDestino === null || aulaDestino.trim().toUpperCase() === "S") break;
        const descripcion = prompt("Descripción (ej. Portátil FP Básica 2-1):");
        const fila = parseInt(prompt("Fila (ej. 2):"), 10);
        const columna = parseInt(prompt("Columna (ej. 1):"), 10);
        const dias = parseInt(prompt("Nº días (ej. 30):"), 10);

        const datos = dptoNaranco.Aulas.get(aulaDestino.trim());
        if (!datos) { console.log("El aula " + aulaDestino + " no existe."); continue; }

        const portatil = new Equipo(descripcion.trim(), true, isNaN(dias) ? undefined : dias);
        if (datos.aula.activaEquipo(portatil, fila, columna)) {
            console.log(portatil.Id + " → " + dptoNaranco.getUbicacion(portatil.Id));
            console.table(datos.aula.Equipos);
            console.log("Ocupación: " + datos.aula.getPorcentajeOcupacion() + "%");   // 105%
        } else {
            console.log("No se ha podido añadir el portátil.");
        }
    }
}
datosPortatiles();
console.log("Total equipos: " + dptoNaranco.getNEquipos());                            // 141
```

```html
<!-- FILE: index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <script type="module" src="./principal_prueba.js"></script>   <!-- 🔴 type="module" -->
    <title>Prueba práctica</title>
</head>
<body><h1>Unidad 2</h1></body>
</html>
```

## 10.2 EL EDIFICIO (Actividad 3: array bidimensional + Propietario + Inmobiliaria)

```js
// FILE: edificio.js
"use strict";

class Propietario {
    nombre; genero; miembros;                       // públicas
    constructor(nombre, genero, miembros) {
        this.nombre = nombre; this.genero = genero; this.miembros = miembros;
    }
    get Nombre() { return this.nombre; }   set Nombre(v) { this.nombre = v; }
    get Genero() { return this.genero; }   set Genero(v) { this.genero = v; }
    get Miembros() { return this.miembros; } set Miembros(v) { this.miembros = v; }
}

class Edificio {
    #calle; #numero; #codigoPostal; #plantas;       // plantas: SIN getter/setter (enunciado)

    constructor(calle = "Sin nombre", numero = 1, codigoPostal = 10000) {
        this.#calle = calle; this.#numero = numero; this.#codigoPostal = codigoPostal;
        this.#plantas = [];
        console.log(`Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}.`);
    }
    get Calle() { return this.#calle; }               set Calle(v) { this.#calle = v; }
    get Numero() { return this.#numero; }             set Numero(v) { this.#numero = v; }
    get CodigoPostal() { return this.#codigoPostal; } set CodigoPostal(v) { this.#codigoPostal = v; }

    agregaPlantasYPuertas(nPlantas, nPuertas) {       // AÑADE a las que ya hay (push)
        for (let i = 0; i < nPlantas; i++) this.#plantas.push(Array(nPuertas).fill(null));
    }

    agregaPropietario(propietario, planta, puerta) {
        const existe = planta >= 0 && planta < this.#plantas.length &&
                       puerta >= 0 && puerta < this.#plantas[planta].length;
        if (!existe) { console.log(`No existe la planta ${planta} o la puerta ${puerta}.`); return; }
        this.#plantas[planta][puerta] = propietario;
        console.log(`${propietario.Nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
    }

    imprimePlantas() {
        this.#plantas.forEach((fila, i) => fila.forEach((p, j) =>
            console.log(`Planta ${i}, puerta ${j}: ${p ? p.Nombre : "vacío"}`)));
        console.table(this.#plantas);
    }
}

class Inmobiliaria {                                  // RETO OPCIONAL
    #edificios = [];
    addEdificio(edificio) { this.#edificios.push(edificio); }
    getEdificio(calle, numero) {
        return this.#edificios.find(e => e.Calle === calle && e.Numero === numero) ?? null;
    }
}

// Pruebas
const e1 = new Edificio("Calle Melancolía", 3, 47001);
e1.agregaPlantasYPuertas(2, 3);
e1.agregaPropietario(new Propietario("Edu", "Hombre", 2), 0, 0);
e1.agregaPropietario(new Propietario("Mayte", "Mujer", 4), 1, 2);
e1.agregaPropietario(new Propietario("Carlos", "Hombre", 2), 5, 0);   // no existe → aviso
e1.agregaPlantasYPuertas(1, 2);
e1.imprimePlantas();
const inmo = new Inmobiliaria();
inmo.addEdificio(e1);
console.log(inmo.getEdificio("Calle Melancolía", 3));   // el edificio
console.log(inmo.getEdificio("Calle Falsa", 99));       // null
```

## 10.3 VEHÍCULOS: herencia + `setInterval` + reloj (slide 21 de `03_Objetos.pdf`)

```js
// FILE: vehiculos.js
class Vehiculo {
    #pasajeros;
    constructor(pasajeros) { this.#pasajeros = pasajeros; }
    get Pasajeros() { return this.#pasajeros; }
    set Pasajeros(v) { this.#pasajeros = v; }
}
class Turismo extends Vehiculo {
    #color;
    constructor(pasajeros, color) { super(pasajeros); this.#color = color; }
    get Color() { return this.#color; }
    set Color(v) { this.#color = v; }
}
class Camion extends Vehiculo {
    #tara;
    constructor(pasajeros, tara) { super(pasajeros); this.#tara = tara; }
    get Tara() { return this.#tara; }
    set Tara(v) { this.#tara = v; }
}

const aleatorioMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const dos = n => String(n).padStart(2, "0");
let vehiculos = [];                                   // array GLOBAL

function capturaReloj() {
    const f = new Date();
    return `${dos(f.getHours())}:${dos(f.getMinutes())}:${dos(f.getSeconds())}`;
}

function generarVehiculos() {
    vehiculos = [];
    const colores = ["azul", "rojo", "verde"];
    for (let i = 0, n = aleatorioMinMax(1, 4); i < n; i++)
        vehiculos.push(new Turismo(aleatorioMinMax(1, 7), colores[aleatorioMinMax(0, 2)]));
    for (let i = 0, n = aleatorioMinMax(1, 4); i < n; i++)
        vehiculos.push(new Camion(aleatorioMinMax(1, 7), aleatorioMinMax(0, 9999)));
}

function mostrarVehiculos(hora) {
    let html = `<h3>${hora}</h3><ul>`;
    for (const v of vehiculos) {
        html += v instanceof Turismo
            ? `<li>Turismo: ${v.Pasajeros} pasajeros, color ${v.Color}</li>`
            : `<li>Camión: ${v.Pasajeros} pasajeros, tara ${v.Tara} kg</li>`;
    }
    document.getElementById("salida").innerHTML += html + "</ul>";
    // (si el enunciado exige document.write y se ejecuta en un intervalo, ojo: borra la página)
}

let veces = 0;
const id = setInterval(() => {
    const hora = capturaReloj();
    generarVehiculos();
    mostrarVehiculos(hora);
    if (++veces === 10) clearInterval(id);            // 10 veces cada 2 s y parar
}, 2000);
```
```html
<!-- ej3.html -->
<body><div id="salida"></div><script src="vehiculos.js"></script></body>
```

## 10.4 AJEDREZ con prototipos y matriz 8×8
→ Código completo en **[8.2](#bloque-8)** (`tablero`, `figura`, `Object.create(figura)`, `colocarPieza`, `console.table`).

## 10.5 Ejercicios clave de arrays / strings / regex / matrices (versiones corregidas)

```js
// FILE: ejercicios_clave.js
// --- Strings (San-Miguel_Lopez_Daniel.js: f4, f5, f6) ---
const cadena = "en un lugar de la mancha";
const f4 = c => c.trim().split(/\s+/)
    .map((p, i) => i === 0 ? p : p[0].toUpperCase() + p.slice(1)).join("");          // enUnLugarDeLaMancha
const f5 = c => { const p = c.trim().split(/\s+/); return p.reduce((ac, x) => ac + x.length, 0) / p.length; };  // media
const f6 = c => c.trim().split(/\s+/).filter(p => p.includes("a")).map(p => p.length);  // longitudes de las que tienen "a"
// ❌ tu f6 usaba if(j="a") (asigna) y return dentro del for; tu f5 no hacía return.
console.log(f4(cadena), f5(cadena), f6(cadena));

// --- CCAA y provincias (exLauraDist/ej1.js) ---
const comunidades = ["Castilla y León", "Valencia", "Andalucía"];
const provincias = [
    ["Valladolid", "Burgos", "León", "Palencia"],
    ["Valencia", "Alicante"],                     // ❌ tenías "valencia" en minúscula
    ["Sevilla", "Córdoba", "Almería"]
];
// b) mostrar todo
const todo = comunidades.map((c, i) => `${c}: ${provincias[i].join(" ")}<br>`).join("");
// c) solo las que empiezan por V o C, en MAYÚSCULAS
const filtrado = comunidades.map((c, i) =>
    `${c}: ${provincias[i].filter(p => /^[VC]/i.test(p)).map(p => p.toUpperCase()).join(" ")}<br>`).join("");
// (tu versión sin .join("") en el map final imprimía comas entre líneas)
console.log(todo + filtrado);

// --- CSV desordenado → filas [nombre, dni, teléfono, cp, código] (72ExpRegCSV.js) ---
const csv = "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,912323232,81233234H,38012,2145SDC,Marta,87654321Q,23456,4532PLF,671223344,Jose Luis,4567KJL,98765432W";
const esNombre = v => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(v);
const esDni = v => /^\d{8}[A-Z]$/i.test(v);
const esTel = v => /^\d{9}$/.test(v);
const esCp  = v => /^\d{5}$/.test(v);
const esCod = v => /^\d{4}[A-Z]{3}$/i.test(v);
const filas = [];
let actual = null;
for (const celda of csv.split(",").map(c => c.trim())) {
    if (esNombre(celda)) { actual = [celda, "", "", "", ""]; filas.push(actual); }
    else if (actual) {
        if (esDni(celda)) actual[1] = celda;
        else if (esTel(celda)) actual[2] = celda;
        else if (esCp(celda)) actual[3] = celda;
        else if (esCod(celda)) actual[4] = celda;
    }
}
console.table(filas);

// --- Multiplicar matrices (multiplicar_matrices.js, corregido) ---
function multiplicarMatrices(A, B) {
    const filA = A.length, colA = A[0].length;          // ❌ tenías filA = A[0].length
    const filB = B.length, colB = B[0].length;
    if (colA !== filB) return null;                      // solo se pueden multiplicar si colA === filB
    const R = Array.from({ length: filA }, () => Array(colB).fill(0));
    for (let i = 0; i < filA; i++)
        for (let j = 0; j < colB; j++)
            for (let k = 0; k < colA; k++) R[i][j] += A[i][k] * B[k][j];    // let en los bucles
    return R;
}
console.table(multiplicarMatrices([[2,0,1],[3,0,0],[5,1,1]], [[1,0,1],[1,2,1],[1,1,0]]));

// --- Array sin repetidos y ordenado (33_arrayOrd.js) ---
console.log([...new Set([4,0,3,4,7,3,5,8,1,8,8,0])].sort((a, b) => a - b));
```
*(Biblioteca → [3.6](#bloque-3) · desestructuración → [7.5](#bloque-7) · Ríos / Persona-Alumno-Profesor → ver 10.6.)*

## 10.6 Clases pequeñas de clase: Río y Persona/Alumno/Profesor

```js
// FILE: rio.js  (objRios)
class Rio {
    constructor(nombre, cuenca) {
        this.nombre = nombre; this.cuenca = cuenca;
        this.caudalMedio = null; this.poblaciones = [];
        console.log(`nuevo rio ${nombre}, de la cuenca: ${cuenca}.`);
    }
    agregarPoblacion(p) {
        if (!this.poblaciones.includes(p)) this.poblaciones.push(p);     // ❌ tu rio.js tenía el método duplicado y cortado
        console.log(`El rio ${this.nombre} pasa por ${p}.`);
    }
    eliminarPoblacion(p) {
        const i = this.poblaciones.indexOf(p);
        if (i !== -1) { this.poblaciones.splice(i, 1); console.log(`El rio ${this.nombre} no pasa por ${p}.`); }
        else console.log(`La población ${p} no consta en el rio ${this.nombre}.`);
    }
    modificarCaudalmedio(n) { this.caudalMedio = n; }
    imprimeCaudal() { return this.caudalMedio === null ? "no consta" : this.caudalMedio; }
    imprimePoblaciones() { return this.poblaciones.length === 0 ? "no consta" : this.poblaciones.join(", "); }
    imprimeRio() { return `Nombre: ${this.nombre}, Cuenca: ${this.cuenca}, Caudal medio: ${this.imprimeCaudal()}, Poblaciones: ${this.imprimePoblaciones()}`; }
}

// FILE: herencia.js  (herenciaClases) — en el HTML: persona.js, profesor.js, alumno.js, main.js EN ESE ORDEN
class Persona { constructor(nombre, apellidos, dni) { this.nombre = nombre; this.apellidos = apellidos; this.dni = dni; } }
class Profesor extends Persona {
    constructor(n, a, d, asignaturas) { super(n, a, d); this.asignaturas = asignaturas; }
    corregirEjercicio(num, nota) { console.log(`${this.nombre} ha corregido el ej ${num} con un ${nota}`); }   // ❌ tu texto decía "ha sacado ... corregido por ${this.nombre}" (profesor y alumno mezclados)
}
class Alumno extends Persona {
    constructor(n, a, d, asignaturas) { super(n, a, d); this.asignaturas = asignaturas; }
    entregarEjercicio(num, profesor) { console.log(`${this.nombre} ha entregado el ej ${num} a ${profesor.nombre}`); }
}
```

## 10.7 Formulario HTML (PruebaInicial) — apuntes rápidos
```html
<form action="URL" method="post" enctype="multipart/form-data" target="_blank">
    <label>Nombre*:</label> <input type="text" name="nombre" required>
    <input type="radio" name="sexo" value="mujer"> Mujer       <!-- mismo name = una sola opción -->
    <input type="checkbox" name="programacion"> Programación   <!-- varias opciones -->
    <input type="file" name="fotografia">
    <select name="idioma"><option value="ingles" selected>Inglés</option></select>
    <textarea name="descripcion" rows="4" cols="45" placeholder="..."></textarea>
    <input type="date" name="fecha" value="2022-01-31"> <input type="time" name="hora" value="15:30">
    <input type="submit" value="Enviar">
</form>
```
`enctype="multipart/form-data"` es **necesario** cuando hay `input type="file"`.

---

<a id="bloque-11"></a>
# BLOQUE 11 — ☠️ LOS 15 FALLOS MORTALES (CHECKLIST ANTES DE ENTREGAR)

*(Sacados de tus propios ejercicios: son los que te han roto el código.)*

| # | ❌ MAL (lo que hiciste) | ✅ BIEN |
|---|---|---|
| 1 | `constructor(descripcion, personal, [dias])` — corchetes en la firma (desestructura un array: peta si no llega) | `constructor(descripcion, personal, dias)` y `if (dias === undefined)` |
| 2 | `this.#id = this.generarId()` **antes** de asignar `#fecha`/`#descripcion`; método sin `#`; `calcularFecha(dias)` sin `this.` | Primero asigna los campos, luego `this.#fecha = this.#calcularFecha(dias); this.#id = this.#generarId();` |
| 3 | Olvidar `this.` o escribir mal el nombre: `idequipo` ≠ `idEquipo`, `eq1` vs `eql` | `this.` siempre dentro de clases; copia/pega nombres; F2 renombra |
| 4 | Mes **0–11**: `new Date(anio, 6, 30)` (es julio) y `getMonth()` sin `+1` en el id | `new Date(anio, 5, 30)` · `getMonth() + 1` |
| 5 | Confundir `getDay()` (semana 0–6) con `getDate()` (día del mes) | `getDate()` día · `getDay()` día de la semana · `getFullYear()` año |
| 6 | `<script src="x.js">` con `import` dentro · `import ... from "./equipo"` sin `.js` | `<script type="module" src="./x.js">` · `from "./equipo.js"` · Live Server |
| 7 | Clase `aula` / `dptoInformatica` en minúscula, getters `get numero()` cuando la prueba usa `.Numero` | Nombre exacto del enunciado/prueba (`Aula`, `DptoInformatica`, `get Numero()`) |
| 8 | `return [i][j];` / `matriz[i,j]` | `return [i, j];` · `matriz[i][j]` |
| 9 | `if (j = "a")` (asigna), `if (x = 5)`; comparar con `==` | `===` / `!==` siempre |
| 10 | Flecha con `{}` sin return: `filter(e => { e > 2 })` | `filter(e => e > 2)` o `{ return e > 2; }` |
| 11 | `[10, 9, 100].sort()` para números (ordena como texto) | `.sort((a, b) => a - b)` |
| 12 | `new Array(5).fill([])` / `.fill(new Array(4))` — todas las filas son la misma | `Array.from({ length: filas }, () => Array(cols).fill(null))` |
| 13 | `for (... in ...)` con `Map`/`Set`/arrays de valores (no da valores o da índices en texto) | `for (const [k, v] of mapa)` · `for (const x of set/array)` |
| 14 | Función sin `return` (`f5`), `return` **dentro** del bucle (`f6` devolvía tras la 1ª vuelta), `findIndex` = `-1` pasado a `splice` (borra el último) | `return` al final · comprobar `!== -1` antes de `splice` |
| 15 | Código sin tabular, `console.log` de depuración sobrando, y no probar en consola | `Shift + Alt + F` · F12 → Console sin errores en rojo antes de entregar |

### ✅ Checklist final de 60 segundos
- [ ] ¿Los nombres de clases, métodos y getters coinciden **letra por letra** con el enunciado y el fichero de pruebas?
- [ ] ¿Cada clase tiene `export` y el principal tiene `import ... "./x.js"`? ¿El HTML tiene `type="module"`?
- [ ] ¿Todas las propiedades "Privada" llevan `#` y están **declaradas** arriba?
- [ ] ¿Los parámetros opcionales se comprueban con `=== undefined`?
- [ ] ¿Fechas: meses 0–11, `+1` al mostrar, `padStart(2,"0")`?
- [ ] ¿Cada método con "Devuelve" hace `return` en **todos** los caminos?
- [ ] ¿`===` en lugar de `==`? ¿`let/const` en lugar de `var`?
- [ ] ¿Abierto con Live Server y **sin errores rojos** en F12?
- [ ] ¿`Shift + Alt + F` para tabular?

---
*Generado a partir de: 02_LaSintaxisDelLenguaje, 03_Objetos, 3_FuncionesYObjetos, 03_Desestructuración, Map y Set, ExpresionesRegulares, Prueba práctica R4, Actividad 3 Edificio, Tarea1 (debug + atajos), ApuntesCliente, DEBERE y todos tus .js/.html de PruebaJS, pruebas2, ejsCasa, objRios, herenciaClases, exLauraDist, Ejercicio1-3, ejExpReg, PruebaInicial.*
