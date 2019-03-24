console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let gen = function*(start) {
    let count = start;
    while(true) {
        yield ++count;
    }
};
let getObj = gen(10);

console.log(getObj.next());
console.log(getObj.return(77));
console.log(getObj.next(55));

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");

let gen1 = function*() {
    try{
        yield 10;
    } catch (message) {
        yield message;
    }
    yield 20;
};

let gen1Obj = gen1();
console.log(gen1Obj.next());
console.log(gen1Obj.throw("error occur!"));
console.log(gen1Obj.next());
/**
 * yield * [iterable object]
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
function* gen2() {
    yield* [10, 20];
}

let gen2Obj = gen2();

console.log(gen2Obj.next());
console.log(gen2Obj.next());
console.log(gen2Obj.next(77));

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let plusGen = function*(value) {
    yield value + 5;
    yield value + 10;
};
let gen3 = function*(value) {
    yield* plusGen(value);
    yield value + 20;
};
let gen3Obj = gen3(10);

console.log("1:", gen3Obj.next());
console.log("2:", gen3Obj.next());
console.log("3:", gen3Obj.next());

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let gen4 = function*(value) {
    yield value;
    yield* gen4(value + 10);
};
let get4Obj = gen4(1);

console.log(get4Obj.next());
console.log(get4Obj.next());
console.log(get4Obj.next());