
function thisFN(params) {
    console.log(this.awesome);
}

awesome = 42;

let testObject ={
    awesome: 4242
};

testObject.func = thisFN;

thisFN();
testObject.func();

delete awesome;

thisFN()

let testObject2 = {
    awesome: 424242
};

let bindFN = thisFN.bind(testObject2);

bindFN();

function Rapper(name) {
    this.name = name;
}

Rapper.prototype = {
    speekFast: function(){
        console.log("Imma kang " + this.name + " da rapper");
    },
    shotGun: function(){
        console.log("Bang Bang");
    }
}

const dedmau = new Rapper("Dedmau");

dedmau.speekFast();

console.log(dedmau.__proto__);

console.log(dedmau);

dedmau.shotGun();

dedmau.shotGun = function(){
    console.log("Bumm Bumm");
}

dedmau.shotGun();

console.log(dedmau);


function EastSideRapper(name) {
    this.name = name;
}

EastSideRapper.prototype = new Rapper("dummy");

EastSideRapper.prototype.dealDrog = function () {
    console.log("Gimme da cassh");
}

EastSideRapper.prototype.speekFast = function(){
    console.log("East side " + this.name + " is da bestest");
}

let tupek = new EastSideRapper("Tupek");

tupek.speekFast();
tupek.dealDrog();
tupek.shotGun();

class WestSideRapper extends Rapper{
    constructor(name){
        super();
        this.name = name;
    }

    pimping() {
        console.log("Gimme cash bitch");
    }
}

const iceCube = new WestSideRapper("IceCube");

iceCube.pimping();
iceCube.speekFast();
iceCube.shotGun();

console.log(typeof WestSideRapper);