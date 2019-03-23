let one = [11, 12];
let two = [21, 22];
let spreadObj = [1, 2, ...one, ...two, 9999];
console.log(spreadObj);
console.log('length:', spreadObj.length);

let musicObj = [..."music"];
console.log('musicObj : ', musicObj);

const param = [1, 2, 3];

console.log(get(...param));

function get(one, two, three) {
    return one + two + three;
}

console.log('==================');
let get_array_func = (...one) => {
    console.log(one);
    console.log(Array.isArray(one));
};
get_array_func(...[1,2,3]);

var a = 3;
var a = 4;