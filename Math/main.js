console.log("Math.log2(4):", Math.log2(4))
console.log("Math.log10(4):", Math.log10(4));

// square parameter values and sum and calculate root
console.log("hypot(3, 4):" + Math.hypot(4,5));
//cbrt() maybe cube root
console.log("cbrt(8):", Math.cbrt(8));
Math.__proto__.shbak = function() {console.log('hahahahah')};
// Math.prototype.shbak2 = function() {console.log('hahahahah')};
//prototype property is exist only in function object
Math.__proto__.shbak();
console.log(Math);