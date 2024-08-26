function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

// my solution
// console.log(displayResult(sum(1,2)))
// you can driectly call a function beside default parameters
//callbacks
const ans = sum(1,2, displayResultPassive)
displayResult(ans);
