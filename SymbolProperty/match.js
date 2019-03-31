console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== String iterator");

class MatchCheck {
    constructor(base) {
        this.base = base;
    }
    [Symbol.match](target) {
        return this.base.indexOf(target) >= 0;
    }
}
let instMatch = new MatchCheck("sports");
console.log("2:", "po".match(instMatch));

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","=============================================== String iterator");
try {
    "ABC".includes(/ABC/);
} catch (e) {
    console.log("정규표현식 작성 불가");
}

let regexpObj = /ABC/;
regexpObj[Symbol.match] = false;
console.log("/ABC/".includes(regexpObj));
console.log("replace, search, split is same pattern");