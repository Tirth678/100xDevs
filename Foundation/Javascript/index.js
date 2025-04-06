console.log("Hello world");
// js is an interpreated language means it checks line by line code, and does not require whole to compile first and then covert it into 0's and 1's and then execute the program.
// it is able to run program partially
// some basic programs done in class
// questions based on simple perimatives
//1
let firstName = "kirat";
let lastName = "singh"
console.log(`HELLO ${firstName} ${lastName} `);

//2
let gender = "male";
if(gender == "male"){
    console.log("Hi sir");
}
else{
    console.log("Hi ma'am")
}

//3 
let n = 1000;
for(let i=0; i<=n; i++){
    console.log(i);
    console.log("\n");
}
// questions based on complex perimetives
//1
const num = [1,2,3,4,5];
for(let i=0; i<num.length; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
//2
function largest(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
const people = [2,7,3,0];
console.log(largest(people));


//3
const allGenders = [

    {
        "name": "kirat",
        "age": 12,
        "isMarried": true
    },
    {
        "name": "raman",
        "age": 24,
        "isMarried": true
    },
    {
        "name": "female",
        "age": 2,
        "isMarried": false
    }
]
for(let i=0; i<allGenders.length; i++){
    console.log(allGenders[i]["isMarried"] == "true")
        console.log(allGenders[i]["name"]);
    
}

//4
const ohGod = [3,4,5,1,2];
let start = 0, end = ohGod.length;
while(start>end){
    start++,
    end--
    swap(start,end);
}
for(let i=0; i<ohGod.length; i++){
    console.log(ohGod);
}




// functions
function findSum(a,b){
    // do things with input and return something as output.
    return a+b;
}
// some more questions in class
//2
function display(str){
    console.log(`this is in very pretty format ${str}`);
}
//3
function add(a,b){
    data = a+b;
    console.log(`Sum's result = `, data);
}


// callbacks
// passing another function as a parameter

function setAdd(n){
    let add = 0;
    for(let i=0; i<n; i++){
        add = add+i;
    }
    return add;
}
let answer = setAdd(n);
console.log(answer);

function square(n){
    return n*n;
}
function doThat(a,b){
    const value1 = square(a);
    const value2 = square(b);
    const ans = value1+value2;
    return ans;
}


// now we're making a callback function

function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
function sumOfThings(a,b,fn){
    const result1 = fn(a);
    const result2 = fn(b);
    return result1+result2;
}
let ans = sumOfThings(1,2, cube);
console.log(ans);