const esPar = n => {
    if (n == 0) {
        return true;
    }
    if (n == 1) {
        return false;
    }
    return esPar(n-2);
};

console.log(esPar(6));
console.log(esPar(7));
