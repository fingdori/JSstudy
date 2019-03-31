//object type : class object, function object, String object etc
/**
 * class expression
 * let name = class{}
 * let name = class inner_name{}
 * let name = class extends super_name{}
 * let name = class inner_name extends super_name{}
 */
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");

class Member {
    constructor(name) {
        this.name = name;
    }
}

/**
 * 1. new ClassName(params); is called new instructor call constructor and deliver params to the constructor
 * 2. constructor make a empty object
 * 3. set properties to the empty object
 * 4. run the constructor block code
 * 5. return instance
 * @type {Member}
 */
let member = new Member('shbak');
Member.prototype.testMethod = function() {
    console.log('test function is called');
};

member.testMethod();