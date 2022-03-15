const square = n => n * n 
console.log(square(3))

const add = (a,b) => a+b 
console.log(add(2,3))

const sayHello = () => "Hello there"
console.log(sayHello());

const myFunc = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }
console.log(myFunc(2,3))

const myObj = () => ({ cost: 500})
console.log(myObj());