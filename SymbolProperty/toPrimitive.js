console.log("1:", 1 + undefined);
console.log("2:", 1 + null);

console.log("3:", "1" + undefined);
console.log("4:", "1" + null);

let obj = {};
console.log("1:", 123 + obj);
console.log("2:", "123" + obj);
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let obj2 = {
    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return 30;
        }
        if (hint === "string") {
            return "문자열";
        }
        return "디폴트";
    }

};

console.log("1:", 20 + obj2);
console.log("2:", 20 * obj2);

console.log("3:", obj2 + 50);
console.log("4:", +obj2 + 50);
console.log("5:", `${obj2}` + 123);