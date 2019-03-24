// tag `[String expression] ${expression} [String expression]`
// not function and parameter inside ()
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let one = 1, two = 2;
// we call tagFunction to tag not a function
function tagFunction(text, value) {
    console.log("1:", text[0]);
    console.log("2:", value);
    console.log("3:", text[1]);
    console.log("4:", typeof text[1]);
    console.log("5:", text);
}
tagFunction `1+2=${one + two}`;
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
// multi parameter in tagged template
// parameter[0] : except expression, string expressions is saved first parameter as a array
// parameter[1] : first expression, ${one + two}
// parameter[2] : second expression, ${one - two}
function tagFunction2(text, plus, minus) {
    console.log(text[0], plus, text[1]);
    console.log(minus, text[2], text[3]);
}

tagFunction2 `1+2=${one + two}이고 1-2=${one - two}이다.`;
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
console.log("1:", String.raw`1+2=${one + two}`);

console.log("2:", `줄 바꿈-1\n줄 바꿈-2`);
console.log("3:", String.raw`줄 바꿈-1\n줄 바꿈-2`);

console.log("4:", `Unicode \u0031\u0032`);
console.log("5:", String.raw`Unicode \u0031\u0032`);

console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
/**
 * String.raw()함수를 테스트 하려고 한다.
 * 첫번째 parameter로 받은 object의 raw프로퍼티 값인 문자열을 문자 하나하나로 전개 하면서 조합값인 두번째 세번 째 값을 사이사이 넣어준다.
 * @Parameter
 * Object : {raw: "String array"}
 * any : to combination
 * @type {string}
 */

let result = String.raw({raw:"ABCDE"}, one, two, 3);
console.log(result);