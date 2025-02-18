// arrow fn, filter, map
function sum(a,b){
    return a+b;
}
// arrow function
const newSum = (a,b) => a+b;

// map and filter
// given an array give me back a new array in which every value is multiplied by 2
// my solution
const num = [1,2,3,4,5];
function mul(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}
console.log(mul(num));

// his solution
const Num = [1,2,3,4,5];
const newArr = [];
function mul(arr){
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return arr;
}
console.log(mul(Num));

// map
function transform(i){
    return i*2;
}
// map exist as a function in array class
// map(num, transform);

const done = [1,2,3,4,5]
done.map(transform);
// const ans = done.mpa(transform);
// console.log(ans);

// or final
const input = [1,2,3,4,5,6]
const output = input.map(function(n){
    return n*3;
})

 // filtering
 // what if I want to take out all the even values out from the array
 function filterLogic(n){
    if(n%2 == 0){
        return True;
    }
    else{
        return False;
    }
 }
const ans = num.filter(filterLogic);
// right way to do it anyways

const newAns = num.filter(function(n){
    if(n%2 == 0){
        return true;
    }
    else{
        return false;
    }
})