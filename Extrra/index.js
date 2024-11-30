// // node index.js in terminal
// // console.log("Hello");
// let a = 1; // variable defining
// a = 2; // now changing its value to 2
// console.log(a); // printing the content on the console
// console.log(2);
// console.log(43);
// console.log("shit got real today")
// const b = 43; // the value cannot be changed
// console.log(b);

// // string bool and number
// let name = "Harkirat";
// let married = false;
// let age = 19;
// console.log(name, married, age);
// console.log("his name is" + name + "age is" + age);


// //1
// if(married == true){
//     console.log("yes he is married!!\n");
// }
// else{
//     console.log("no he is not married!\n");
// }

// let answer = 0;
// for(let i=0; i<=10; i++){
//     answer = answer+i;
// }
// console.log(answer);


// // arrays and objects
// // complex premitives

// const names = ["raj", "shrey", "shwarma", "shit"];
// console.log(names[0]);


// //2
// const nums = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<nums.length; i++){
//     if(nums[i]%2 == 0){
//         console.log(nums[i]);
//     }
// }


// //example
// const personArray = ["raman", "chaman", "priya"];
// const genderArray = ["male", "male", "female"];

// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// //objects
// const user1 = {
//     firstname: "harkirat",
//     firstage: 12
// }
// console.log(user1.firstage);

// // better approach
// const userlist = [
//     {firstname: "kirart",
//         age: 12 },
//     {firstname: "nothing",
//         age: "minor"}
//     ]

// function addSum(a,b){
//     return a+b;
// }

// console.log(addSum(1,2));

// // SetTimeOut
// function greet(){
//     console.log("hello worldf\n");
// }
// //after 3 seconds greet will be called
// setTimeout(greet, 3*1000);
// // it will call function after a interval of time
// setInterval(greet, 1*5);



// // callbacks
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSquare(a,b){
    let square1 = square(a);
    let square2 = square(b);
    return square1+square2;
}
function sumOfCubes(a,b){
     let cube1 = cube(a);
     let cube2 = cube(b);
     return cube1+cube2;
}
let ans = sumOfSquare(1,2);
console.log(ans);
let cubes = sumOfCubes(1,2);
console.log(cubes);


// we are using a similar patterns in this following functions so we can make a generalised functions
function generalised(a,b, fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1+square2;
}
let ansnon = generalised(1,2, square);
console.log(ansnon);

