// function fun(a:number,b: number):number {
//   return a+b
// }
//
// console.log(fun(2,2))
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Car_name;
// const car = {
//   "speed": 200,
//   "wheels": 4,
//   "drive": function () {
//     console.log(`brum brum with speed ${this.speed}`)
//   }
// }
//
// car.drive()
// function Car() {
//   this.name = 'Mercedes';
//   this.speed = 300;
//   this.drive = function () {
//     console.log(`Car drives with speed ${this.speed}`)
//   }
//   return this
// }
// const mercedes = Car()
// mercedes.drive()
// function Car(name:string, speed:number) {
//   this.name = name;
//   this.speed = speed;
//   this.drive = function () {
//     console.log(`${this.name} drives with speed ${this.speed}`)
//   }
// }
// const mercedes = new Car('mercedes', 50)
// mercedes.drive()
// mercedes.name = "mercedessuper"
// mercedes.speed = 120
// mercedes.drive()
var Car = /** @class */ (function () {
    function Car(name, speed) {
        _Car_name.set(this, void 0);
        __classPrivateFieldSet(this, _Car_name, name, "f");
        this.speed = speed;
    }
    Car.prototype.drive = function () {
        console.log("".concat(__classPrivateFieldGet(this, _Car_name, "f"), " drives with speed ").concat(this.speed));
    };
    return Car;
}());
_Car_name = new WeakMap();
var bmw = new Car('bwm', 150);
console.log(bmw);
// bmw.#name = 'bwmsuper'
// console.log(bmw)
