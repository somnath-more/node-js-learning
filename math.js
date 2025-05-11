// Creation of simple module
const add =(a,b)=>{
    return a+b;
}
const sub =(a,b)=>{
    return a-b;
}
const mul =(a,b)=>{
    return a*b;
}
const div =(a,b)=>{
    return a/b;
}
// 1st approach to send submodule
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;
// 2nd approach to send submodule
//  module.exports = { add, sub, mul, div };
// 3rd approach to send submodule(fucntion)
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
