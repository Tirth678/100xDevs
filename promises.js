// defining a promise
function promisifiedFunction(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    });
    return p;
}
// calling a promise
const ans = promisifiedFunction(1000);
ans.then(function(){
    console.log("done");
});

//how to call a promisified function

