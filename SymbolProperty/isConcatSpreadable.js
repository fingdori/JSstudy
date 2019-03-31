/**
 * Symbol.isConcatSpreadable is default true
 * @type {number[]}
 */
let one = [11, 12], two = [21, 22];
let result = one.concat(two);
console.log(result, result.length);

two[Symbol.isConcatSpreadable] = false;
result = one.concat(two);
console.log(result, result.length);

two[Symbol.isConcatSpreadable] = true;
result = one.concat(two);
console.log(result, result.length);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
// in the Array-like object
one = [11, 12];
let fivesix = {
    0: "five", 1:"six", length: 2
};
result = one.concat(fivesix);
console.log(result, result.length);

let arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    0: "five", 1: "six", length:2
};

result = one.concat(arrayLike);
console.log(result, result.length);