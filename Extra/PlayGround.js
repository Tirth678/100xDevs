const { FSWatcher } = require("vite");

function onDone(){
    console.log("Hey, I am done here!!");
}
setTimeout(onDone, 5000); // this is an async function call

console.log("Hello!");

let a = 1;
console.log(a);
