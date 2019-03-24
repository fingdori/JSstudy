/**
 * [regular expression]u, u flag and .test("number") return match result
 * if not write u flag regular expression will be recognized as String array
 * @type {boolean}
 */
let result = /\u{31}\u{32}/u.test("12");
console.log(result);
result = /\u{31}\u{32}/.test("12");
console.log(result);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let regexpObj = /CD/y;
console.log("1:", regexpObj.lastIndex);
console.log("2:", regexpObj.test("ABCDEF"));

regexpObj.lastIndex = 2;
console.log("3:", regexpObj.test("ABCDEF"));
console.log("4:", regexpObj.lastIndex);
console.log("5:", regexpObj.test("0123CD"));