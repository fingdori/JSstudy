class Sports {
    constructor(member) {
        this.member = member;
    }
    get getMember() {
        return this.member;
    }
}

class Soccer extends Sports {
    set setGround(ground) {
        this.ground = ground;
    }
}
let obj = new Soccer(11);
console.log(obj.getMember);