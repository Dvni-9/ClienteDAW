const fibonacci = n => {
    return n.reduce((ac, e, i) => {
        if (i < 2) {
            ac.push(i);
        } else {
            ac.push(ac[i - 1] + ac[i - 2]);
        }
        return ac;
    }, [ ]);
};

n=10;
let numeros = new Array(n).fill(0);
console.log(fibonacci(numeros));
