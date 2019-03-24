// function* keyword make it function to generator function
/**
 * function* name() {}
 * @Parameter
 * (Optiona)[param[, param[, param[, paramN]]], max 255
 * @Return
 * Function (generator function)
 */

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
function* sports(one, two) {
    console.log("함수 블록");
    yield one + two;// what is yield?
};
console.log(typeof sports);

// didn't call sports function, just return object type to variable "genObj"
// different from normal function, generator function not called <function name (parameters) expression>
let genObj = sports(1,2);
console.log(typeof genObj);