// console.log(Object.prototype)

let obj = {}

let obj2 = {}
obj.__proto__.age = 34;

// console.log(JSON.stringify(obj) === JSON.stringify(obj2))
// console.log(obj.__proto__ === obj2.__proto__)
// console.log(obj2.__proto__)

console.log(obj2.__proto__.age)
console.log(obj2.age)
console.log(obj.age)

MADNESS