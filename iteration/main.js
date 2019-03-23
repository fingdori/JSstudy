console.log('hello');

let arrayObj = [1,2];
let result = arrayObj[Symbol.iterator];
console.log(result);

let objectObj = {};
let objectResult = objectObj[Symbol.iterator];
console.log(objectResult);

let iteratorObj = arrayObj[Symbol.iterator]();
console.log('1:', typeof iteratorObj);
console.log('2:', iteratorObj.next());
console.log('3:', iteratorObj.next());
console.log('4:', iteratorObj.next());