let sym = Symbol();
try {
    +sym;
} catch (e) {
    console.log("+sym 사용 불가!");
}
console.log("\x1b[32m\x1b[40m" + "%s" + "\x1b[0m","===============================================");
try {
    sym | 0
} catch (e) {
    console.log("sym | 0 사용불가");
}
console.log("\x1b[32m\x1b[40m" + "%s" + "\x1b[0m","===============================================");
sym = Symbol();
try {
    sym + "문자열";
} catch (e) {
    console.log("문자열 연결 불가");
}

console.log(String(sym) + "연결");
console.log(sym.toString() + "연결");

console.log("\x1b[32m\x1b[40m" + "%s" + "\x1b[0m","===============================================");

sym = Symbol("123");
try {
    `${sym}`;
} catch (e) {
    console.log("`${sym} 불가`");
}
