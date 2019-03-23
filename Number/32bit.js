//imul -> calculate multiply and make it result to 32bit
//clz32 -> return the number of zero bit from left to right
//fround -> 32bit dynamic fraction

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
console.log("1. :", Math.imul(2, 4));
console.log("2. :", Math.imul(123456, 10000));
console.log("3. :", Math.imul(123456, 100000));

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
console.log("1. :", Math.clz32(1));
console.log("2. :", Math.clz32(2));
console.log("3. :", Math.clz32(2.5));
console.log("4. :", Math.clz32(true));

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let value = 0.1 + 0.2;
console.log("1. :", Math.fround(value));
console.log("2. :", value);
console.log("3. :", 1.23);
console.log("4. :", Math.fround(1.23));