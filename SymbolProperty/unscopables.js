console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let sports = {soccer: "축구", baseball: "야구"};
with(sports) {
    console.log(soccer, baseball);
};
sports[Symbol.unscopables] = {baseball:true};
try {
    with(sports) {
        console.log(soccer);
        let value = baseball;
    }
} catch (e) {
    console.log(e.message);
}