// 1. Write the program to greet a person given their first and last name
let firstname = "Tirth";
let lastname = "Pandya";
console.log("Hello!!"  +" "+firstname  +" "+  lastname);

// 2. Write a program that greets a person based on their gender. (If else)

let name = "tirth";
let gender = "female";
if(gender == "male"){
    console.log("hello uncle!");
}
else if(gender == "female"){
    console.log("hello aunty");
}
else{
    console.log("there exist only 2 genders");
}

// 3. Write a program that counts from 0 - 1000 and prints (for loop)
for(let i=0; i<=1000; i++){
    console.log(i);
}



// 1. Write a program prints all the even numbers in an array

// const num = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<num.length; i++){
//     if(num[i]%2 == 0){
//         console.log(num[i]);
//     }
// }

// 2. Write a program to print the biggest number in an arrya
function largestelement(number){
    let max = number[0];
    for(let i=0; i<number.length; i++){
        if(number[i]>max){
            max = number[i];
        }
    }
    return max;
}

// 3. Write a program that prints all the male people’s first name given a complex object

const person = ["kirat", "soham", "priya"];
const genderarr = ["male", "male", "female"];
for(let i=0; i<person.length; i++){
    if(genderarr[i] == "male"){
        console.log(person[i]);
    }
}


// 4. Write a program that reverses all the elements of an array
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("harry"));


// 1. Write a function that finds the sum of two numbers
function addSum(x,y){
    return x+y;
}
console.log(addSum(1,2));
// 2. Write another function that displays this result in a pretty format
function prettier(addSum){
    console.log("the sum of the 2 values: "+addSum);
}
console.log(prettier(addSum(1,2)));
// 3. Write another function that takes this sum and prints it in passive tense
function passiveadd(prettier){
    console.log("in passive term!\n");
}
console.log(passiveadd(prettier(addSum(1,2))))

// done

// 1. Create a counter in Javascript (counts down from 30 to 0)

for(let i=30; i>=0; i--){
    console.log(i);
}
// 2. Calculate the time it takes between a setTimeout call and the inner function actually runnin
function not(){
    console.log("test");
}
setTimeout(not, 1000);
// it will print after when the program wil be executed completely

// 3. Create a terminal clock (HH:MM:SS)
setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
