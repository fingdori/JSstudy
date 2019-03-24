console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let arrayLike = {0:"ABC", 1:"DEF", 2:"가나다", length:3};
let one = Array.prototype.copyWithin.call(arrayLike, 0, 1);
console.log(one);

function two() {
    return Array.prototype.copyWithin.call(arguments, 3, 0, 2);
}

console.log(two(1, 2,3, 4, 5));