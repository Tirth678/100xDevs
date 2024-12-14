// Async and Sync function
// what are synchronous functions
// together, one after the other, sequential only one thing is happening at a time

// what are asynchronous functions
// opposite of synchronous, happens in parts, multiple things are context switching with each other

// humans can do only one thing at a time(single threaded)
// but we can context-switch b/w multiple tasksn or delegate task to other people
// by context switching we can decrease its time taken by a good amount


// JS is still single threaded in nature, it goes line by line only
// the async call is either handled by the OS in readfile or webAPI(c++ code in browser) in setTimeOut
// example: reading a file from your default system
// running a speicfic function after some time
// delegated the task to setimeout and then other functions will be done simultanoisly

function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}
function findSumTill100(){
    return findSum(100);
}

setTimeout(findSumTill100, 1000);
console.log("Hello world!!\n");

// in this setimeout will execute after one second so control will switch to console.log and then timeout will work


// what are other asyn functions provided?
// setimeout
// fs.readfile
// fetch

const fs = require("fs");
fs.read("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");
// this will still run first
// asyn function hai fir readfile run hoga


//JS browser architecutre
// call back
// web api
// call back queue


//promises

function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}
function findSumTill100(){
    findSum(100);
}
setTimeout(findSumTill100, 1000);
console.log("Hello!!");


// the code is ugly.
// promises are syntactical sugar that make this code slightly more redable

// pending, resolved, rejected
let d = new Promise(function(resolve){
resolve();
});
function callBack(){
    console.log("shit got real\n");
}
d.then(callBack);

