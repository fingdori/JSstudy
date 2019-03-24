/**
 * fill
 * @Argument
 * any: value to fill
 * Number: start index of fill
 * Number: end index of fill
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let one = [1,2,3];
console.log(one.fill(7));

let two = [1, 2, 3, 4, 5];
console.log(two.fill(7, 1));

let three = [1,2,3,4,5];
console.log(three.fill(7, 1, 3));