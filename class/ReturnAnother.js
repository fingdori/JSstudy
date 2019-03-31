class Member{
    constructor() {
        return 1;
    }
    getName() {
        return "Name";
    }
}

let memberObj = new Member();
console.log(memberObj.getName());

class AnotherMember {
    constructor() {
        return {name:"Hong Kil Dong"};
    }
    getName(){
        return "name";
    }
}
console.log("\x1b[32m\x1b[47m" + "%s" + "\x1b[0m","===============================================");
let anotherMember = new AnotherMember();
console.log(anotherMember.name);
console.log(anotherMember.getName);
