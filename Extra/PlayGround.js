// slice of a given string
function getSlice(str, start, end){
    console.log("Original string: ", str);
    console.log("Slice of string: ", str.slice(start, end));
}
getSlice("Hello world", 0, 5);