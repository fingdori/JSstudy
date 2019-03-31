/**
 * Symbol property is can't get
 * @type {{nine: number}}
 */
let obj = {nine:999};
obj[Symbol("one")] = 111;
obj[Symbol("two")] = 222;
console.log('1:', obj);

for(var key in obj) {
    console.log('2:', key);
}