function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function quad(n){
    n*n*n*n;
}
function doSomething(a,b, fn){
    let op1 = fn(a);
    let op2 = fn(b);
    return op1 + op2;
}
function doNothing(z,y, fx){
    return fx(z) + fx(y);
}
let ans = doSomething(1,2, square);
console.log(ans)
let ans2 = doNothing(1,2, square);
console.log(ans2)