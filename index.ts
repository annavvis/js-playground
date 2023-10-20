// function fun(a:number,b: number):number {
//   return a+b
// }
//
// console.log(fun(2,2))

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

// class Car {
//   #name
//   speed
//   constructor(name: string, speed: number) {
//     this.#name = name;
//     this.speed = speed;
//   }
//   drive(){
//     console.log(`${this.#name} drives with speed ${this.speed}`)
//   }
// }
//
// const bmw = new Car('bwm', 150)
// console.log(bmw)
// bmw.#name = 'bwmsuper'
// console.log(bmw)


interface Animal {
  name: string,
  fly(): void,
  makeASound(): void
}

function fly(animal: Animal) {
  animal.fly()
}

const kanarek : Animal = {
  name: 'Zenek',
  fly: function(){
    console.log(`${this.name} is flying`)
  },
  makeASound(): void {
    console.log(`${this.name} makes PiPiPi`)
  }
}

const kicia : Animal = {
  fly(): void {
    console.log(`${this.name} cannot fly!!!`)
  },
  name: 'Chrupka',
  makeASound(): void {
    console.log(`${this.name} makes Meow`)
  }
}
const żółwik : Animal = {
  fly(): void {
    console.log(`${this.name} cannot fly!!!`)
  },
  name: 'JAnusz',
  makeASound(): void {
    console.log(`${this.name} is silent`)
  }
}

function makeASound(animal: Animal) {
  animal.makeASound()
}

makeASound(kicia)
makeASound(żółwik)