let sym = Symbol("key");
let result = JSON.stringify({[sym]: "value"});
console.log(result);
console.log('Symbol didn\'t want to expose outside.');