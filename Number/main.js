let result = 0.1 + 0.2;
console.log(result);

console.log(result < Number.EPSILON);

console.log(result - 0.3);

console.log(result === 0.3);

result = Number.isNaN(0/0);
console.log('result of divided by zero : ' + result);

