console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let arrayObj = [1, 2, 3];
let sliceOne = arrayObj.slice(1, 3);
let sliceTwo = sliceOne.slice(1, 2);

class ExtendArray extends Array {
    getValue(){}
}
let newArray = new ExtendArray(1,2,3);

let newInst = newArray.slice(1,2);
console.log(newInst instanceof ExtendArray);
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
/**
 * symbol.species is function that return constructor
 */

class ExtendArray2 extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

let oneInstance = new ExtendArray2(1,2,3);

let twoInstance = oneInstance.slice(1,2);
console.log(oneInstance instanceof ExtendArray2);

console.log(twoInstance instanceof Array);
console.log(twoInstance instanceof ExtendArray2);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== RETURN ANOTHER object");
class ExtendOne extends Array {
    showOne() {
        console.log("ExtendOne");
    }
}

class ExtendTwo extends Array {
    static get [Symbol.species]() {
        return ExtendOne;
    }

    showTwo() {
        console.log("ExtendTwo");
    }
}

let twoInst = new ExtendTwo(10, 20, 30);
let threeInst = twoInst.filter(value => value > 10);
console.log(threeInst);

//when filtered out object is change to ExtendOne because Symbol.species
threeInst.showOne();
try {
    console.log(threeInst.showTwo());
} catch (e) {
    console.log('threeInst\'s showTwo() method undefined');
}

