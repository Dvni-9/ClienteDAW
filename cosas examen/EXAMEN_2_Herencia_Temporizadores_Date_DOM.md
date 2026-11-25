# ✈️ EXAMEN 2 (resuelto) — Control de vuelos: herencia + temporizadores + Date + DOM

> **Qué entra:** herencia (`extends`, `super`), miembros `static`, `instanceof`, `Math.random`, `Date` (`getDay`, restas), `setInterval`/`clearInterval`/`setTimeout`, pintar en el DOM.
> **Dificultad:** ⭐⭐⭐ · **Tiempo:** 75–90 min.
> **Por qué cae:** es el ejercicio de **Vehículos / Turismo / Camión** de `03_Objetos.pdf` (slide 21: clases derivadas + aleatorios + `setInterval` 10 veces cada 2 s) con otra piel.

---

## 📝 ENUNCIADO

Se desea simular el radar de un aeropuerto. Crea las siguientes clases con **getters y setters** apropiados:

| Clase | Hereda de | Propiedades | Notas |
|---|---|---|---|
| `Vuelo` | — | `codigo` (privada, se genera: `VU001`, `VU002`…), `pasajeros` (privada), `horaSalida` (privada, `Date`) | Método `resumen()`. **Estático** `totalVuelos()` (nº de vuelos creados) y **estático** `compararPorPasajeros(a, b)` (orden de más a menos pasajeros). |
| `VueloComercial` | `Vuelo` | `aerolinea` (privada) | Sobrescribe `resumen()` añadiendo la aerolínea. |
| `VueloCarga` | `Vuelo` | `toneladas` (privada) | Sobrescribe `resumen()` añadiendo las toneladas. |

Para la simulación se piden las siguientes funciones:
- `capturaReloj()`: devuelve la hora actual con formato `hh:mm:ss`.
- `diaSemanaEsp(fecha)`: devuelve el día de la semana en español.
- `diasHasta(fechaObjetivo)`: nº de días enteros que faltan desde hoy hasta esa fecha.
- `generarVuelos()`: genera aleatoriamente y guarda en un **array global** entre **1 y 3** vuelos comerciales (50–180 pasajeros, aerolínea aleatoria entre Iberia, Vueling y Ryanair) y entre **1 y 3** vuelos de carga (0–3 pasajeros, 5–40 toneladas).
- `mostrarVuelos(hora)`: genera el HTML de una **tabla** con los vuelos **ordenados de más a menos pasajeros** y la añade a `<div id="panel">`.

Las funciones se invocarán **6 veces con un intervalo de 2 segundos**. Un segundo después de la última, se mostrará un mensaje de cierre con el total de vuelos creados y cuántos días faltan para Navidad y qué día de la semana cae.

---

## 🧭 GUÍA DE TRADUCCIÓN

| El enunciado dice… | Se escribe… |
|---|---|
| "hereda de" | `class VueloCarga extends Vuelo` |
| "sobrescribe `resumen()` añadiendo…" | `resumen() { return super.resumen() + " · …"; }` |
| "constructor de la hija" | `super(...)` **la primera línea**, luego `this.#toneladas = …` |
| "estático" | `static totalVuelos() {…}` · se llama `Vuelo.totalVuelos()` (con la **clase**) |
| contador estático privado | `static #contador = 0;` · `Vuelo.#contador++` |
| "código VU001" | `"VU" + String(n).padStart(3, "0")` |
| "entre 1 y 3 (ambos incluidos)" | `Math.floor(Math.random() * (3 - 1 + 1)) + 1` |
| "hh:mm:ss" | `getHours()`, `getMinutes()`, `getSeconds()` con `padStart(2, "0")` |
| "día de la semana" | `["Domingo",…,"Sábado"][fecha.getDay()]` (0 = domingo) |
| "días que faltan" | `Math.ceil((objetivo - hoySinHora) / 86400000)` (restar `Date` = milisegundos) |
| "ordenados de más a menos" | `[...vuelos].sort(Vuelo.compararPorPasajeros)` |
| "6 veces cada 2 s" | `setInterval(fn, 2000)` + contador + `clearInterval(id)` al llegar a 6 |
| "un segundo después" | `setTimeout(fn, 1000)` |
| "añadir a la página" | `document.getElementById("panel").innerHTML += html` |
| "tipo del vuelo" | `v instanceof VueloComercial` |

**⚠️ Trampas escondidas**
1. **`super()` antes de `this`** en el constructor de la hija → si no, `ReferenceError: Must call super constructor…`.
2. **No uses `document.write` dentro de un `setInterval`:** una vez cargada la página **borra todo el documento**. Usa `innerHTML +=` (con `=` solo verías el último radar).
3. **`sort()` muta el array** → ordena una **copia** (`[...vuelos]`) para no desordenar el global.
4. **`clearInterval(id)`:** sin él, el intervalo no se detiene nunca. Guarda el id en una `const`.
5. Pasa `setInterval(fn, 2000)` la función **sin paréntesis**; con `fn()` la ejecutas una sola vez.
6. Los **meses van de 0 a 11**: Navidad = `new Date(anio, 11, 25)`.
7. `<script src="vuelos.js" defer>` (o el script debajo del `<div>`), si no `getElementById("panel")` devuelve `null`.
8. Un `static #contador` es **privado de la clase**: solo se toca con `Vuelo.#contador` dentro del cuerpo de `Vuelo`.

---

## ✅ SOLUCIÓN COMPLETA

### `vuelos.js`
```js
"use strict";

// ============ CLASES (herencia) ============
class Vuelo {
    static #contador = 0;                           // estático PRIVADO: pertenece a la clase
    #codigo;
    #pasajeros;
    #horaSalida;

    constructor(pasajeros, horaSalida = new Date()) {
        Vuelo.#contador++;
        this.#codigo = "VU" + String(Vuelo.#contador).padStart(3, "0");
        this.#pasajeros = pasajeros;
        this.#horaSalida = horaSalida;
    }

    static totalVuelos() { return Vuelo.#contador; }
    static compararPorPasajeros(a, b) { return b.Pasajeros - a.Pasajeros; }   // de más a menos

    get Codigo() { return this.#codigo; }
    get Pasajeros() { return this.#pasajeros; }
    set Pasajeros(valor) { this.#pasajeros = valor; }
    get HoraSalida() { return this.#horaSalida; }

    resumen() { return `${this.#codigo} (${this.#pasajeros} pasajeros)`; }
}

class VueloComercial extends Vuelo {
    #aerolinea;
    constructor(pasajeros, aerolinea) {
        super(pasajeros);                           // 🔴 super ANTES de usar this
        this.#aerolinea = aerolinea;
    }
    get Aerolinea() { return this.#aerolinea; }
    resumen() { return `${super.resumen()} · Comercial ${this.#aerolinea}`; }   // sobrescribe + llama al padre
}

class VueloCarga extends Vuelo {
    #toneladas;
    constructor(pasajeros, toneladas) {
        super(pasajeros);
        this.#toneladas = toneladas;
    }
    get Toneladas() { return this.#toneladas; }
    resumen() { return `${super.resumen()} · Carga ${this.#toneladas} t`; }
}

// ============ FUNCIONES AUXILIARES ============
const aleatorioMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;   // ambos incluidos
const dos = n => String(n).padStart(2, "0");

function capturaReloj() {                           // hh:mm:ss
    const f = new Date();
    return `${dos(f.getHours())}:${dos(f.getMinutes())}:${dos(f.getSeconds())}`;
}

function diaSemanaEsp(fecha) {                      // getDay(): 0 = domingo ... 6 = sábado
    return ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][fecha.getDay()];
}

function diasHasta(fechaObjetivo) {                 // días enteros que faltan desde hoy
    const MS_DIA = 1000 * 60 * 60 * 24;
    const hoy = new Date();
    const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    return Math.ceil((fechaObjetivo - hoySinHora) / MS_DIA);       // resta de Date = milisegundos
}

let vuelos = [];                                    // array global

function generarVuelos() {
    vuelos = [];
    const aerolineas = ["Iberia", "Vueling", "Ryanair"];
    for (let i = 0, n = aleatorioMinMax(1, 3); i < n; i++)
        vuelos.push(new VueloComercial(aleatorioMinMax(50, 180), aerolineas[aleatorioMinMax(0, 2)]));
    for (let i = 0, n = aleatorioMinMax(1, 3); i < n; i++)
        vuelos.push(new VueloCarga(aleatorioMinMax(0, 3), aleatorioMinMax(5, 40)));
}

function mostrarVuelos(hora) {
    // [...vuelos] copia: sort() MUTA el array y no queremos tocar el original
    const ordenados = [...vuelos].sort(Vuelo.compararPorPasajeros);
    let html = `<h3>Radar ${hora}</h3><table border="1"><tr><th>Tipo</th><th>Resumen</th></tr>`;
    for (const v of ordenados) {
        const tipo = v instanceof VueloComercial ? "Comercial" : "Carga";
        html += `<tr><td>${tipo}</td><td>${v.resumen()}</td></tr>`;
    }
    html += "</table>";
    // innerHTML += AÑADE. document.write dentro de un setInterval BORRARÍA la página.
    document.getElementById("panel").innerHTML += html;
}

// ============ SIMULACIÓN: 6 veces cada 2 segundos ============
let vueltas = 0;
const id = setInterval(() => {
    const hora = capturaReloj();
    generarVuelos();
    mostrarVuelos(hora);
    vueltas++;
    if (vueltas === 6) {
        clearInterval(id);                          // sin esto no para nunca
        setTimeout(() => {                          // cierre 1 segundo después
            const navidad = new Date(new Date().getFullYear(), 11, 25);   // mes 11 = diciembre
            document.getElementById("panel").innerHTML +=
                `<p>Simulación terminada. Vuelos creados: ${Vuelo.totalVuelos()}.
                 Navidad cae en ${diaSemanaEsp(navidad)} (faltan ${diasHasta(navidad)} días).</p>`;
        }, 1000);
    }
}, 2000);
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Control de vuelos</title>
    <script src="vuelos.js" defer></script>   <!-- defer: espera a que exista <div id="panel"> -->
</head>
<body>
    <h1>Control de tráfico aéreo</h1>
    <div id="panel"></div>
</body>
</html>
```

---

## 🖥️ SALIDA ESPERADA
(Valores aleatorios: cambian en cada ejecución. Aquí se muestran las primeras líneas y el final; en el navegador son 6 tablas, una cada 2 s.)

```text
== Radar 01:20:18 ==
Tipo | Resumen
Comercial | VU001 (120 pasajeros) · Comercial Vueling
Comercial | VU002 (107 pasajeros) · Comercial Ryanair
Comercial | VU003 (85 pasajeros) · Comercial Vueling
Carga | VU005 (1 pasajeros) · Carga 18 t
Carga | VU004 (0 pasajeros) · Carga 37 t
== Radar 01:20:18 ==
Tipo | Resumen
Comercial | VU007 (98 pasajeros) · Comercial Iberia
Comercial | VU006 (75 pasajeros) · Comercial Vueling
Carga | VU009 (2 pasajeros) · Carga 18 t
Carga | VU008 (0 pasajeros) · Carga 29 t
== Radar 01:20:18 ==
Tipo | Resumen
Comercial | VU011 (178 pasajeros) · Comercial Vueling
...
Simulación terminada. Vuelos creados: 24.
                 Navidad cae en Viernes (faltan 30 días).
clearInterval llamado: 1
```

**Qué comprobar:** cada radar tiene entre 2 y 6 filas (1–3 comerciales + 1–3 de carga) · dentro de cada tabla los pasajeros van de **mayor a menor** · los códigos `VU001`, `VU002`… **no se reinician** entre radares (el contador es estático) · al final aparece el mensaje de cierre una sola vez y `clearInterval` se llamó una vez.

---

## 🔁 Variaciones que pueden pedirte
- **Reloj en vivo:** `setInterval(() => reloj.textContent = capturaReloj(), 1000)` sin límite.
- **Cuenta atrás:** `let n = 10; const id = setInterval(() => { div.textContent = n--; if (n < 0) clearInterval(id); }, 1000);`
- **Método `toString()`** en `Vuelo` → `String(vuelo)` / `` `${vuelo}` `` lo usa.
- **Clase abstracta "falsa":** en `Vuelo` → `if (new.target === Vuelo) throw new Error("Clase abstracta");`
- **Filtrar con `filter`:** `vuelos.filter(v => v instanceof VueloCarga && v.Toneladas > 20)`.
- **Total de pasajeros:** `vuelos.reduce((ac, v) => ac + v.Pasajeros, 0)`.
