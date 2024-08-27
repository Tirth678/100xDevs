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
    if(person[i] == "male"){
        console.log(genderarr[i]);
    }
}
