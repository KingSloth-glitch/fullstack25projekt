import {reverseString, toUpperCase} from "./stringUtils.js";

const text ="javascript";

const reversed = reverseString(text);
const upper = toUpperCaseString(text);

console.log("Original:", text);
console.log("Reversed:", reversed);
console.log("Uppercase:", upper);