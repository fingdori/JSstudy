console.log('symbol is another primitive type like string, number, boolean, null, undefined');
console.log('string, number, boolean have wrapper object like String, Number, Boolean');
console.log('Symbol has a Symbol wrapper object');
console.log('All wrapper object\'s valueOf() method return primitive value');

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
const sym = Symbol();
console.log('1:', sym);
console.log('2:', typeof sym);
console.log('3:', Symbol("주석"));
console.log('4:', sym == Symbol(), 'Symbol object is only one although have same parameter');
console.log('5:', Symbol());
