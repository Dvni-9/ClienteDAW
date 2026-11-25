# 🔎 EXAMEN 4 (resuelto) — Expresiones regulares, CSV, Map y Set

> **Qué entra:** regex (`^ $ [] \d {n,m} ? + * | ()`), `test`, `exec`, `match`, `replace` con `/g`, `Set` para duplicados, `Map` para frecuencias, `Date` para validar fechas reales.
> **Dificultad:** ⭐⭐⭐ · **Tiempo:** 75 min.
> **Por qué cae:** son tus ejercicios `ejExpReg.js` (validar 9 campos), `72ExpRegCSV.js` (CSV desordenado), `69expReg.js` (palabras por longitud) y las diapositivas de `Map y Set` (reto de duplicados).

---

## 📝 ENUNCIADO (todo en `examen4.js`)

1. **Validador.** Crea la función `comprobar(titulo, dato, expr)` que comprueba si `dato` cumple la expresión regular `expr` y **muestra el resultado** (✅/❌). Úsala para validar: nombre y apellidos (empieza en mayúscula, admite tildes y ñ, varias palabras), DNI (8 dígitos y una letra), teléfono español (9 cifras que empiezan por 6, 7 o 9), código postal (5 dígitos), matrícula (4 dígitos y 3 letras, sin distinguir mayúsculas), email, año (1900–2099), **fecha `dd/mm/aaaa` que exista de verdad** (no vale 31/02) y código de pedido `PED-AAAA-NNN` (extrae el año y el número con grupos).
2. **CSV desordenado.** La cadena `csv` contiene registros mezclados (con espacios sobrantes, campos vacíos y un registro repetido). Obtén un array de filas `[nombre, dni, teléfono, cp, matrícula]` ordenadas, **sin DNIs repetidos** (usa `Set`).
3. **Analizador de texto.** Dado un texto: extrae las palabras (sin signos de puntuación), agrúpalas **por longitud**, cuenta cuántas veces aparece cada palabra (sin distinguir mayúsculas) con un **`Map`** y obtén las palabras **únicas ordenadas alfabéticamente** con un **`Set`**.
4. **Censura.** Sustituye en una ficha todos los DNI por `[DNI]` y todos los teléfonos por `[TLF]`.

---

## 🧭 GUÍA DE TRADUCCIÓN

| El enunciado dice… | Se escribe… |
|---|---|
| "comprobar que cumple un formato" | `/^…$/.test(dato)` — **siempre** `^` y `$` |
| "8 dígitos y una letra" | `/^\d{8}[A-Za-z]$/` |
| "empieza por 6, 7 o 9; 9 cifras" | `/^[679]\d{8}$/` |
| "5 dígitos" | `/^\d{5}$/` |
| "sin distinguir mayúsculas" | flag `i` → `/…/i` |
| "año 1900–2099" | `/^(19\|20)\d{2}$/` |
| "mayúscula inicial, varias palabras" | `/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/` |
| "extraer partes del texto" | grupos `( )` + `regex.exec(texto)` → `m[1]`, `m[2]` |
| "la fecha debe existir" | regex **y** `new Date(a, m-1, d)` comprobando que `getDate() === d` |
| "todas las palabras del texto" | `texto.match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]+/g) \|\| []` |
| "agrupar por longitud" | `(obj[p.length] ??= []).push(p)` |
| "contar apariciones" | `Map`: `set(p, (has(p) ? get(p) : 0) + 1)` |
| "únicas y ordenadas" | `[...new Set(…)].sort((a, b) => a.localeCompare(b, "es"))` |
| "sustituir **todos**" | `replace(/…/g, "texto")` — sin `g` solo cambia el primero |
| "quitar espacios sobrantes de cada campo" | `.split(",").map(c => c.trim())` |

**⚠️ Trampas escondidas**
1. **Sin `^…$`** la regex valida "dentro" del texto: `/\d{5}/.test("a123456b")` es `true`. Con anclas no.
2. **`/^[a-z]+$/i`** no acepta tildes ni ñ: añade `áéíóúñ` al rango. `\w` tampoco las incluye.
3. **`{,3}` no existe en JS** → `{0,3}`. Los corchetes `[abc]` son **un** carácter.
4. **`^` dentro de `[]` niega** (`[^0-9]` = "no dígito"); fuera, es "inicio".
5. **Un punto `.` es cualquier carácter** → para un punto literal `\.` (en el email: `\.[A-Za-z]{2,}`).
6. **`match` con `g` devuelve `null`** si no hay coincidencias → `|| []` para no romper `.length`.
7. **`exec` con grupos:** `m[0]` es el texto entero; los grupos empiezan en `m[1]`. `[, dia, mes, anio] = m` salta el 0.
8. **Los meses de `Date` van de 0 a 11** → `mes - 1`. Una fecha inexistente (31/02) no da error: JS la desborda a marzo, por eso se compara `getMonth()`.
9. **Flags en el constructor:** `new RegExp("\\d+", "g")` → en un string hay que doblar la barra.
10. **Un `Map` distingue tipos** (`1` ≠ `"1"`) y se recorre con `for (const [k, v] of mapa)`, **nunca** `for..in`.
11. **Un `Set` solo guarda valores únicos** (no claves, ni acceso por posición): para ordenar hay que pasarlo a array.
12. Las celdas con un **espacio al final** (`"983123456 "`) fallan en `^\d{9}$` → `trim()` antes de clasificar.

---

## ✅ SOLUCIÓN COMPLETA

### `examen4.js`
```js
"use strict";

// ============ EJERCICIO 1: validador ============
function comprobar(titulo, dato, regex) {
    const ok = regex.test(dato || "");               // dato || "" evita "null" si cancelan el prompt
    console.log(`${ok ? "✅" : "❌"} ${titulo.padEnd(10)} "${dato}"` + (ok ? "" : "  → no cumple las especificaciones"));
    return ok;
}

const NOMBRE   = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
const DNI      = /^\d{8}[A-Za-z]$/;
const TELEFONO = /^[679]\d{8}$/;
const CP       = /^\d{5}$/;
const MATRICULA = /^\d{4}[A-Z]{3}$/i;
const EMAIL    = /^[\w.-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;
const ANIO     = /^(19|20)\d{2}$/;
const FECHA    = /^(\d{2})\/(\d{2})\/(\d{4})$/;
const PEDIDO   = /^PED-(\d{4})-(\d{3})$/;

function fechaReal(texto) {                          // regex + comprobar que el día EXISTE
    const m = FECHA.exec(texto);                     // exec → array con grupos, o null
    if (m === null) return false;
    const [, dia, mes, anio] = m.map(Number);        // m[0] es el texto completo: se salta con una coma
    const f = new Date(anio, mes - 1, dia);          // mes - 1 (meses 0-11)
    // Si la fecha no existe (31/02) JS la "desborda" a marzo y getMonth() ya no coincide
    return f.getDate() === dia && f.getMonth() === mes - 1 && f.getFullYear() === anio;
}

console.log("--- 1) Validador ---");
comprobar("Nombre", "María José", NOMBRE);
comprobar("Nombre", "maría", NOMBRE);
comprobar("DNI", "12345678Z", DNI);
comprobar("DNI", "1234567Z", DNI);
comprobar("Teléfono", "612345678", TELEFONO);
comprobar("Teléfono", "512345678", TELEFONO);
comprobar("CP", "47001", CP);
comprobar("CP", "4700", CP);
comprobar("Matrícula", "8948rgh", MATRICULA);
comprobar("Matrícula", "894RGH", MATRICULA);
comprobar("Email", "dani_sm@correo.es", EMAIL);
comprobar("Email", "dani@correo", EMAIL);
comprobar("Año", "2004", ANIO);
comprobar("Año", "1850", ANIO);
console.log("Fecha 06/01/2004 real:", fechaReal("06/01/2004"), "| 31/02/2024 real:", fechaReal("31/02/2024"), "| 6/1/04:", fechaReal("6/1/04"));
const ped = PEDIDO.exec("PED-2026-017");
console.log("Pedido:", ped ? `año ${ped[1]}, nº ${ped[2]}` : "formato incorrecto", "| PED-26-17:", PEDIDO.test("PED-26-17"));

// ============ EJERCICIO 2: CSV desordenado ============
const csv = "  Ana , 34567881A,983123456 ,47030,8948RGH, Luis,912323232,81233234H,38012,2145SDC,,Marta,87654321Q,23456,4532PLF,671223344,Ana,34567881A,Jose Luis,4567KJL,98765432W";

const esNombre    = v => /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/.test(v);
const esDni       = v => /^\d{8}[A-Z]$/i.test(v);
const esTelefono  = v => /^\d{9}$/.test(v);
const esCp        = v => /^\d{5}$/.test(v);
const esMatricula = v => /^\d{4}[A-Z]{3}$/i.test(v);

function limpiarCsv(texto) {
    const filas = [];
    let actual = null;
    for (const celda of texto.split(",").map(c => c.trim())) {   // trim: quita los espacios sobrantes
        if (celda === "") continue;                              // campos vacíos fuera
        if (esNombre(celda)) {                                   // un nombre abre una fila nueva
            actual = [celda, "", "", "", ""];                    // [nombre, dni, teléfono, cp, matrícula]
            filas.push(actual);
        } else if (actual !== null) {
            if (esDni(celda)) actual[1] = celda.toUpperCase();
            else if (esTelefono(celda)) actual[2] = celda;
            else if (esCp(celda)) actual[3] = celda;
            else if (esMatricula(celda)) actual[4] = celda.toUpperCase();
        }
    }
    const vistos = new Set();                                    // Set: DNIs ya vistos
    return filas.filter(f => {
        if (f[1] !== "" && vistos.has(f[1])) return false;       // DNI repetido → fuera
        vistos.add(f[1]);
        return true;
    });
}
console.log("--- 2) CSV ---");
console.table(limpiarCsv(csv));

// ============ EJERCICIO 3: analizador de texto con Map y Set ============
const texto = "El gato y el perro juegan; el gato duerme. ¿Y el pez? El pez nada, nada y nada.";
const palabras = texto.match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]+/g) || [];    // || [] evita error si no hay ninguna

const porLongitud = {};                                           // { 2: [...], 4: [...], ... }
for (const p of palabras) (porLongitud[p.length] ??= []).push(p);

const frecuencias = new Map();
for (const p of palabras.map(x => x.toLowerCase())) {
    frecuencias.set(p, (frecuencias.has(p) ? frecuencias.get(p) : 0) + 1);
}
const unicas = [...new Set(palabras.map(p => p.toLowerCase()))].sort((a, b) => a.localeCompare(b, "es"));

console.log("--- 3) Texto ---");
console.log("Palabras:", palabras.length, "| por longitud:", porLongitud);
for (const [palabra, veces] of frecuencias) console.log(`  ${palabra}: ${veces}`);   // for..of con Map
console.log("Únicas ordenadas:", unicas);
const masFrecuente = [...frecuencias.entries()].sort((a, b) => b[1] - a[1])[0];
console.log("La más repetida:", masFrecuente);

// ============ EJERCICIO 4: censurar con replace global ============
const ficha = "Contacta con Ana (DNI 34567881A, tlf 983123456) o con Luis (81233234H, 612345678).";
const censurado = ficha
    .replace(/\b\d{8}[A-Za-z]\b/g, "[DNI]")          // /g = TODAS (sin g solo reemplaza la primera)
    .replace(/\b[679]\d{8}\b/g, "[TLF]");
console.log("--- 4) Censura ---");
console.log(censurado);
```

---

## 🖥️ SALIDA ESPERADA

```text
--- 1) Validador ---
✅ Nombre     "María José"
❌ Nombre     "maría"  → no cumple las especificaciones
✅ DNI        "12345678Z"
❌ DNI        "1234567Z"  → no cumple las especificaciones
✅ Teléfono   "612345678"
❌ Teléfono   "512345678"  → no cumple las especificaciones
✅ CP         "47001"
❌ CP         "4700"  → no cumple las especificaciones
✅ Matrícula  "8948rgh"
❌ Matrícula  "894RGH"  → no cumple las especificaciones
✅ Email      "dani_sm@correo.es"
❌ Email      "dani@correo"  → no cumple las especificaciones
✅ Año        "2004"
❌ Año        "1850"  → no cumple las especificaciones
Fecha 06/01/2004 real: true | 31/02/2024 real: false | 6/1/04: false
Pedido: año 2026, nº 017 | PED-26-17: false
--- 2) CSV ---
┌─────────┬─────────────┬─────────────┬─────────────┬─────────┬───────────┐
│ (index) │ 0           │ 1           │ 2           │ 3       │ 4         │
├─────────┼─────────────┼─────────────┼─────────────┼─────────┼───────────┤
│ 0       │ 'Ana'       │ '34567881A' │ '983123456' │ '47030' │ '8948RGH' │
│ 1       │ 'Luis'      │ '81233234H' │ '912323232' │ '38012' │ '2145SDC' │
│ 2       │ 'Marta'     │ '87654321Q' │ '671223344' │ '23456' │ '4532PLF' │
│ 3       │ 'Jose Luis' │ '98765432W' │ ''          │ ''      │ '4567KJL' │
└─────────┴─────────────┴─────────────┴─────────────┴─────────┴───────────┘
--- 3) Texto ---
Palabras: 18 | por longitud: {
  '1': [ 'y', 'Y', 'y' ],
  '2': [ 'El', 'el', 'el', 'el', 'El' ],
  '3': [ 'pez', 'pez' ],
  '4': [ 'gato', 'gato', 'nada', 'nada', 'nada' ],
  '5': [ 'perro' ],
  '6': [ 'juegan', 'duerme' ]
}
  el: 5
  gato: 2
  y: 3
  perro: 1
  juegan: 1
  duerme: 1
  pez: 2
  nada: 3
Únicas ordenadas: [
  'duerme', 'el',
  'gato',   'juegan',
  'nada',   'perro',
  'pez',    'y'
]
La más repetida: [ 'el', 5 ]
--- 4) Censura ---
Contacta con Ana (DNI [DNI], tlf [TLF]) o con Luis ([DNI], [TLF]).
```

**Comprobaciones:** `31/02/2024` → `false` · `PED-26-17` → `false` (el año debe tener 4 cifras) · el CSV queda en **4 filas** (el segundo "Ana" con el mismo DNI se elimina y el campo vacío se ignora) · "el" aparece **5** veces (con `El` y `el` juntos gracias a `toLowerCase`).

---

## 🧷 Chuleta de regex (de tus diapositivas)
`^` inicio · `$` fin · `.` cualquier carácter menos salto de línea · `.*` cero o más · `[a-z]` rango · `[^0-9]` negado · `\d \D \w \W \s \S` · `\n \t \0 \uXXXX` · `a|b` o · `?` 0 ó 1 · `+` 1 o más · `*` 0 o más · `{n}` · `{n,m}` · `{n,}` · `(grupo)` · `regex.test(s)` · `s.match(r)` · `r.exec(s)` · `s.replace(r, nuevo)` (con `/g` todos).
