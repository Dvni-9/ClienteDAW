/* console.log(/^hello/.test('hola mundo'));
console.log(/^hola/.test('hola mundo'));
console.log(/world$/.test('hola mundo'));
console.log(/mundo$/.test('hola mundo')); */
console.log('El estarisco========');
console.log(/^ho$/.test('hso'));
console.log(/^[0-9]/.test('hola mundo'));
console.log(/^[^0-9]/.test('hola mundo'));
console.log(/^a.*[^0-9]/.test('hola mundo'));

console.log(/[^0-9]/.test('3a'));//para que de true, tiene que estar formada exclusivamente por caracteres dentro del rango
console.log(/^[a-z]/.test('hola mundo'));
console.log(/[a-d]/.test('hola mundo')+('<='));//los corchetes miran si ALGUNO de los caracteres están en ese rango, no si todos
console.log(/[a-z]$/.test('hola mundo'));
console.log(/^[l-z]/.test('hola mundo'));

console.log(/[0-12-3]$/.test('hola mundo3'));//puedes darle varios rangos poniéndolo de la misma forma

console.log('--- Pruebas de escapes y punto ---');









console.log('--- \d ---');
// \d = cualquier dígito, mu weno pa validar nums
console.log('\\d 123:', /\d/.test('123'));
console.log('\\d abc:', /\d/.test('abc'));
console.log('\\d+ hola123:', /\d+/.test('hola123'));
console.log('\\d+ 12a34:', /\d+/.test('12a34'));

console.log('--- \D ---');
// \D = todo lo que NO es un dígito
console.log('\\D abc:', /\D/.test('abc'));
console.log('\\D 123:', /\D/.test('123'));
console.log('\\D+ abc123:', /\D+/.test('abc123'));
console.log('\\D+ 123abc:', /\D+/.test('123abc'));

console.log('--- \s ---');
// \s = espacios en blanco, INCLUYE SALTOS DE LÍNEA
console.log('\\s espacio:', /\s/.test('hola mundo'));
console.log('\\s tab:', /\s/.test('hola\tmundo'));
console.log('\\s salto:', /\s/.test('hola\nmundo'));
console.log('\\s+ varios:', /\s+/.test('hola   mundo'));

console.log('--- \S ---');
// \S = cualquier carácter que no sea un espacio en blanco vaya
console.log('\\S hola:', /\S/.test('hola'));
console.log('\\S " hola":', /\S/.test(' hola'));
console.log('\\S tab:', /\S/.test('\t'));
console.log('\\S+ 123abc:', /\S+/.test('123abc'));

console.log('--- \w ---');
// \w = letras, números y _ 
console.log('\\w letra:', /\w/.test('a'));
console.log('\\w numero:', /\w/.test('7'));
console.log('\\w _:', /\w/.test('_'));
console.log('\\w+ user_42:', /\w+/.test('user_42'));

console.log('--- \W ---');
// \W = lo que NO es letra/número/_ 
console.log('\\W espacio:', /\W/.test('hola mundo'));
console.log('\\W guion:', /\W/.test('hola-mundo'));
console.log('\\W !:', /\W/.test('!'));
console.log('\\W letra:', /\W/.test('abc'));

console.log('--- \n ---');
// \n = salto de línea PILA DE IMPORTANTE
console.log('\\n salto:', /\n/.test('uno\ndos'));
console.log('\\n sin salto:', /\n/.test('uno dos'));
console.log('exec \\n:', /\n/.exec('uno\ndos'));
console.log('\\n+ varios:', /\n+/.test('uno\n\ndos'));

console.log('--- . ---');
// . coincide con cualquier carácter excepto salto de línea, con /s sí también lo hace
console.log('punto axb:', /a.b/.test('axb'));
console.log('punto a!b:', /a.b/.test('a!b'));
console.log('punto salto:', /a.b/.test('a\nb'));
console.log('punto salto s:', /a.b/s.test('a\nb'));


