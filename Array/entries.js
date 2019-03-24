/**
 * @Argument
 * no argument
 * @Return
 * Iterator object
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");

let values = [10, 20, 30];
let iterator = values.entries();
console.log(iterator.next());

for(var [key, value] of iterator) {
    console.log(key, ":", value)
}
/**
 * keys
 * @Parameter
 * no parameter
 * @Return
 * iterator object
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let iterator_keys = [10, 20, 30].keys();
for(var key of iterator_keys) {
    console.log(key + ":", iterator[key]);
}
/**
 * values
 * @Parameter
 * None
 * @Return
 * iterator object
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let iterator_values = [10, 20, 30].values();
console.log(iterator_values.next());

