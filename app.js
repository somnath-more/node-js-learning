// add = require("./math.js");
global.console.log("Node.js is running");
// globalThis.console.log("Node.js is running");
// console.log(globalThis.process);
//!IN JS console.log(document.process);
// console.log(process);


// use of another module from math.js file
// const ans=add(2,3);
// console.log(ans);
// Easily Export and Require Multiple Functions and Variables

// const { add, sub, mul, div } = require("./math.js");
// console.log(add(2, 3));
// console.log(sub(2, 3));
// console.log(mul(2, 3));
// console.log(div(2, 3));

const math = require("./math.js");
const { add, sub, mul, div } = math;
console.log(add(2, 3));
console.log(math.sub(2, 3));
