const A = [
    [2,0,1],
    [3,0,0],
    [5,1,1]
];
const B = [
    [1,0,1],
    [1,2,1],
    [1,1,0]
];
function multiplicarMatrices(A,B){
    const colA = A[0].length;
    const filA = A[0].length;
    const colB = B[0].length;
    const filB = B.length;
    const resultado = Array.from({length: filA},()=>Array(colB).fill(0));

    if(colA !==filB){
        return null;
    }

    for (i=0; i<filA; i++){
        for (j=0; j<colB; j++){
            for (k=0; k<colA; k++){
                resultado[i][j]+= A[i][k]* B[k][j];
            }
        }
    }
    // return A.map((filA)=> B[0].map()=>filA.reduce)
    return resultado;
}
console.table(A);
console.table(B);
console.table(multiplicarMatrices(A,B));

for(let i =0; i<10; i++){

    const filA = Math.floor(Math.random()*10)+1;
    const colA = Math.floor(Math.random()*10)+1;
    const filB = colA;
    const colB = Math.floor(Math.random()*10)+1;
    
}