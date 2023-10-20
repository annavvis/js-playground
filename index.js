// function fun(a:number,b: number):number {
//   return a+b
// }
//
// console.log(fun(2,2))
function fly(animal) {
    animal.fly();
}
var kanarek = {
    name: 'Zenek',
    fly: function () {
        console.log("".concat(this.name, " is flying"));
    },
    makeASound: function () {
        console.log("".concat(this.name, " makes PiPiPi"));
    }
};
var kicia = {
    fly: function () {
        console.log("".concat(this.name, " cannot fly!!!"));
    },
    name: 'Chrupka',
    makeASound: function () {
        console.log("".concat(this.name, " makes Meow"));
    }
};
var żółwik = {
    fly: function () {
        console.log("".concat(this.name, " cannot fly!!!"));
    },
    name: 'JAnusz',
    // makeASound(): void {
    //   console.log(`${this.name} is silent`)
    // }
};
function makeASound(animal) {
    animal.makeASound();
}
makeASound(kicia);
makeASound(żółwik);
