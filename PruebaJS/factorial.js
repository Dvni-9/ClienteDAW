const factorial = n => {
    
    return n.reduce((ac, e, i) => {
        n.push(i+1);
        if (i < 1) {
            ac = e;
            
        } else {
            ac = ac * e;
        }
        return ac;
    }, 1);
};

numero = 8;
let numerosFac = [];
for (i = 1; i <= numero; i++) {
    numerosFac.push(i);
}
console.log(factorial(numerosFac));
