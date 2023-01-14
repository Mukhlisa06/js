/* fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10) */


let fib = [0, 1];
for(let i=fib.length; i<9; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 