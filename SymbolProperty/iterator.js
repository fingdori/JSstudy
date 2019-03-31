console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let numberArray = [10, 20];
for (let value of numberArray) {
    console.log(value);
}

let iteratorObj = numberArray[Symbol.iterator]();
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== String iterator");
let stringValue = "1A";

for(let value of stringValue) {
    console.log(value);
}
let iterObj = stringValue[Symbol.iterator]();

console.log(iterObj.next());
console.log(iterObj.next());
console.log(iterObj.next());

/**
 * object's iterator have no Symbol[iterator]()
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== String iterator");
let obj = {
    [Symbol.iterator]() {
            return {
                maxCount:2,
                count:0,
                next() {
                    if (this.count < this.maxCount) {
                        return {value: this.count++, done: false};
                    }
                    return {value: undefined, done: true};
                }
            }
    }
};
let iteratorObj2 = obj[Symbol.iterator]();

console.log(iteratorObj2.next());
console.log(iteratorObj2.next());
console.log(iteratorObj2.next());

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== String iterator");
let objForGenerator = {};
objForGenerator[Symbol.iterator] = function*() {
    yield 10;
    yield 20;
    yield 30;
};
let result = [...objForGenerator];
console.log(result);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== String iterator");
let gen = function*() {
    yield 10;
    yield 20;
};
let genObj = gen();
console.log(genObj.next());

let iteratorObjGenerator = genObj[Symbol.iterator]();
console.log(iteratorObjGenerator.next());
