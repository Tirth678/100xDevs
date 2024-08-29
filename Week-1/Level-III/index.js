// Async and Sync function
// what are synchronous functions
// together, one after the other, sequential only one thing is happening at a time

// what are asynchronous functions
// opposite of synchronous, happens in parts, multiple things are context switching with each other

// humans can do only one thing at a time(single threaded)
// but we can context-switch b/w multiple tasksn or delegate task to other people
// by context switching we can decrease its time taken by a good amount

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

