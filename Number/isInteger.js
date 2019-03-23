console.log("\x1b[35m" + "%s" + "\x1b[0m","===============================================");
console.log("1: ", Number.isInteger(0));
console.log("1: ", Number.isInteger(1.0));
console.log("1: ", Number.isInteger(-123));
console.log("\x1b[32m" + "%s" + "\x1b[0m","===============================================");
console.log("4: ", Number.isInteger("12"));
console.log("4: ", Number.isInteger(1.02));
console.log("4: ", Number.isInteger(NaN));
console.log("4: ", Number.isInteger(true));