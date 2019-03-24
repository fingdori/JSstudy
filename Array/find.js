/**
 * find
 * when callback function return true, return element in processing
 * @Parameter
 * Function : callback function
 * Object : (Optional) object that access by this in callback function
 * @Return
 * array element or undefined
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
// use arrow function not a function
let result = [1, 2, 3].find((value, index, allData) => value === 2);
console.log(result);

let result_using_this_property = [1, 2, 3].find((value, index, allData) => value === this.key, {key:1});
console.log(result_using_this_property);

let result_using_this_property_not_arrow = [1, 2, 3].find(function(value, index, allData) {
    return value === this.key;
}, {key:1});
console.log(result_using_this_property_not_arrow);

/**
 * find array index that element satisfy condition
 * @Parameter
 * Function: callback function
 * Object : object that use in callback function this keyword
 * @Return
 * -1: when not met the condition
 * index number : met condition
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
result = [10, 20, 30].findIndex(function(value, index, allData) {
    return value === 30 && value === this.check;
}, {check:30});
console.log(result);

