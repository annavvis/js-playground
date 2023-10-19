// class Car {
//     #name
//     speed
//     constructor(name, speed) {
//         this.#name = name;
//         this.speed = speed;
//     }
//     #drive(){
//         console.log(`${this.#name} drives with speed ${this.speed}`)
//     }
//     setName(name){
//         this.#name = name
//     }
// }
//
// const bmw = new Car('bwm', 150)
// bmw.setName("audi")
// bmw.drive()

class Car {
    name
    speed
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    drive(){
        // console.log(`${this.name} drives with speed ${this.speed}`)
        console.log(this)
    }
    static createBMW(speed) {
    return new Car('BMW', speed)
    }
    static build({name = "porsche", speed}){
        return new Car(name, speed)
    }
}

const bmw = new Car('bwm', 150)
// bmw.drive()

const mercedes = new Car('mercedes', 200)
// mercedes.drive()

// console.log(Car.createBMW(300))
console.log(Car.build({speed: 90}))