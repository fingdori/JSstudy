/**
 * yield is generator function processing unit
 * when next() call, it will process until met yield keyword and expression
 * return object type, that properties have "value" and "done"
 * @param one
 * @returns {IterableIterator<*>}
 */
function* sports(one) {
    let two = yield one;
    let param = yield two + one;
    yield param + one;
}

let generatorObj = sports(10);

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next(20));

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let gen = function*(value) {
    value = value + 10;
    yield ++value;
    value = value + 7;
    yield ++value;
};
let genObj = gen(1);

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let gen2 = function*(value) {
    return ++value;
};
let gen2Obj = gen2(1);
console.debug(gen2Obj.next());

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let gen3 = function*(param) {
    let one = param + 1;
    yield one;
    var two = 2;
    yield one + two;
};

let gen3Obj = gen(10);

console.log(gen3Obj.next());
console.log(gen3Obj.next());

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let one, two;
let gen4 = function*() {
    one = yield;
    two = yield one + 10;
};

let gen4Obj = gen4();

console.log(gen4Obj.next());
console.log(gen4Obj.next(12));
console.log(gen4Obj.next(14));

/**
 * next() will return value from return keyword not only yield
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let getAmount = function*(qty, price) {
  let amount = Math.floor(qty * price);
  let discount = yield amount;
  return amount - discount;
};

let getDiscount = function(amount) {
  return amount > 1000 ? amount * 0.2 : amount * 0.1;
};

let amountObj = getAmount(10, 60);

let result = amountObj.next();
console.log(result);
let dcAmount = getDiscount(result.value);
console.log(dcAmount);
console.log(amountObj.next(dcAmount));
