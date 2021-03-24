const Player = function (name, number, team, height) {
    this.name = name;
    this.number = number;
    this.team = team;
    this.height = height;
};

Player.prototype.speak = function (statement) {
    console.log(`${this.name} says: '${statement}'`);
};

var gk = new Player("Okon", 1, "Man City", 5.9);
gk.speak("cover well, good job");

var gk = {
    name: "Okon",
    number: 1,
    team: "Man City",
    height: "5.9",
    speak: function (statement) {
        console.log(`${this.name} says: '${statement}'`)
    }
}

var st = {
    name: "Messi",
    number: 10,
    team: "Barca",
    height: "5",
    speak: function (statement) {
        console.log(`${this.name} says: '${statement}'`);
    }
}

var md = {
    name: "Max",
    number: 8,
    team: "Akwa Utd",
    height: "5.5",
    speak: function (statement) {
        console.log(`${this.name} says: '${statement}'`);
    }

};

//ANOTHER WAY class constructor
class Player {
    constructor(name, number, team, height) {
        this.name = name;
        this.number = number;
        this.team = team;
        this.height = height;
    }
    speak(statement) {
        console.log(`${this.name} says: '${statement}'`);
    }
}
