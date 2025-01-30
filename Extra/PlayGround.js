const { split } = require("postcss/lib/list");

// split the given string
const splitString = (str, sep) => {
    console.log("Original string: ", str);
    console.log("After split: ", str.split(sep));
}
splitString("Hello world", " ");