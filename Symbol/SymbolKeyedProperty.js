let sym = Symbol("123");
let obj = {[sym]: "456"}; // symbol-keyed property
console.log(obj);

console.log(obj[sym]);
console.log(obj.sym);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");

const symbolOne = Symbol("symbol one");
const symbolTwo = Symbol("symbol two");

class Sports {
    static [symbolOne]() {
        return "Symbol-1";
    }

    [symbolTwo]() {
        return "Symbol-2";
    }
}

console.log(Sports[symbolOne]());

let obj2 = new Sports();
console.log(obj2[symbolTwo]());