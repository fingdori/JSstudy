console.log("1: ", "ㄱ".charCodeAt(0));
console.log("2: ", "ㅏ".charCodeAt(0));
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let jamo = "\u3131\u314f";
console.log("3: ", jamo.normalize("NFC"));
console.log("4: ", jamo.normalize());
console.log("5: ", jamo.normalize("NFD"));
console.log("6: ", jamo.normalize("NFKD"));
console.log("7: ", jamo.normalize("NFKC"));