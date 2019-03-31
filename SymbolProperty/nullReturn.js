console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
class ExtendOne extends Array {
    static get [Symbol.species]() {
        return null;
    }
}
let oneInst = new ExtendOne(10, 20, 30);
let arrayInst = oneInst.filter(value => value > 10);

/**
 * if you return null in species property, then you will get super class's Symbol.species
 */
console.log(arrayInst instanceof Array);
console.log(arrayInst instanceof ExtendOne);
