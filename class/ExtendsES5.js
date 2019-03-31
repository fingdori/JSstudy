/**
 * ES5 style extends
 * @param member
 * @constructor
 */
// if have no left value semi-colon doesn't need
function Sports(member) {
    this.member = member;
}
// make a member function
Sports.prototype.setItem = function(item) {
    this.item = item;
};
function Soccer(member) {
    Sports.call(this, member);
}
Soccer.prototype = Object.create(Sports.prototype, {
    setGround: {
        value: function(ground) {
            this.ground = ground;
        }
    }
});
Soccer.prototype.constructor = Soccer;

var obj = new Soccer(11);
obj.setItem('축구');
obj.setGround('상암');

console.log(obj.member);
console.log(obj.item);
console.log(obj.ground);

