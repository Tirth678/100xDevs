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
// promise chaining
function promisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
    return p;
}
// aynsc await
promisifiedFunction(1000).then(function(){
    console.log("first one is done");
    promisifiedFunction(2000).then(function(){
        console.log("second one is done");
    })
})
promisifiedFunction(1000).then(function(){
    console.log("first one is done");
    return promisifiedFunction(2000).then(function(){
        console.log("second one is done");
    })
});
