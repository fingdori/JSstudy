/**
 * array-like object to array
 * @type {any[]}
 */
let arrayObj = Array.from({0:"zero", 1:"one", 2:"two", length:3});
console.log(Array.isArray(arrayObj));
console.log(arrayObj);

/**
 * String is already arrayLike object
 * @type {string[]}
 */
let stringObj = Array.from("ABC");
console.log(stringObj);
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
/**
 * callback function's this is second parameter of callback function
 * @type {{"0": number, "1": number, length: number}}
 */
let arrayLike = {0:10, 1:30, length:2};
let values = Array.from(arrayLike, function(value) {
    return value + this.bonus;
}, {bonus:100});
console.log(values);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let arrayObj2 = Array.of(1, 2,3 );
console.log(arrayObj2);
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let one = [1, 2,3 , 4, 5];
console.log(one.copyWithin(0, 3));
console.log("after one : " + one);
let two = [1, 2,3 , 4, 5];
console.log(two.copyWithin(0, 2, 4));
let three = [1, 2,3 , 4, 5];
console.log(three.copyWithin(3));
