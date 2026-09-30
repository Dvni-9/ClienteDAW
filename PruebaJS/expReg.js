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







