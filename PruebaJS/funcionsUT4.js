
let a = [1, 2, 3, 4];



let f1 = (array) => {
    return array
        .filter((n) => (n * 3) % 4 === 0)
        .reduce((ac, n) => ac.concat(n * 3), []);
};


let f2 = (array) => {
    array
        .filter((n) => n % 2 !== 0)
        .reduce((ac, n) => {
            console.log(n);
            return ac;
        }, 0);
};

let f3 = (array) => {
    return array.reduce((ac, n, i) => ac + (i % 2 === 0) * n, 0);
};

console.log(f1(a)); 
f2(a); 
console.log(f3(a)); 