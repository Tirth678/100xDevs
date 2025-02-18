// create a map fn that takes an array and a transform fn as input and returns the transformed array as output
const newArr = []
function myArrow(arr, fn){
    for(let i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr;
}