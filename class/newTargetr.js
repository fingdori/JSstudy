/**
 * new.target is meta property
 * reference constructor
 */
let sports = function() {
    console.log(new.target);
};

sports();
new sports();

class Sports {
    constructor() {
        console.log("Sports:", new.target.name);
    }
}

class Soccer extends Sports {
    constructor() {
        super();
        console.log("Soccer:", new.target.name);
    }
}

let sportsObj = new Sports(); // call just super class's constructor
let soccerObj = new Soccer(); // call sub class constructor and that call super class's constructor