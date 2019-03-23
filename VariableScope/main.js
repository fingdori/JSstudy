function test_var() {
    var in_test_var = 3;
    console.log('in_test_var : ', in_test_var);
}

function test_default() {
    try {
        in_test_default = 3;
        console.log('in_test_default : ', in_test_default);
    } catch (e) {
        console.log('\x1b[36m%s\x1b[0m', 'hoisting error occur'); // logging color '\x1b[36m' and logging \x1b[36m
        //console.log(e);
    }

}
test_var();
test_default();
try{
    console.log('outside function test_default(), test_default : ', in_test_default);
} catch (e) {
    //console.log(e);
}


// like hoisting
let in_test_default = 're assigend by let';

console.log('reassign default variable in_test_default : ', in_test_default);
try{
    console.log('outside function test_var(), test_var : ', in_test_var);
} catch (e) {
    console.log('defined variable in function can\'t access outside of function');
    console.log(e);
}

