// node index.js in terminal
// console.log("Hello");
let a = 1; // variable defining
a = 2; // now changing its value to 2
console.log(a); // printing the content on the console
console.log(2);
console.log(43);
console.log("shit got real today")
const b = 43; // the value cannot be changed
console.log(b);

// string bool and number
let name = "Harkirat";
let married = false;
let age = 19;
console.log(name, married, age);
console.log("his name is" + name + "age is" + age);


//1
if(married == true){
    console.log("yes he is married!!\n");
}
else{
    console.log("no he is not married!\n");
}

let answer = 0;
for(let i=0; i<=10; i++){
    answer = answer+i;
}
console.log(answer);


// arrays and objects
// complex premitives

const names = ["raj", "shrey", "shwarma", "shit"];
console.log(names[0]);


//2
const nums = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<nums.length; i++){
    if(nums[i]%2 == 0){
        console.log(nums[i]);
    }
}

//objects

