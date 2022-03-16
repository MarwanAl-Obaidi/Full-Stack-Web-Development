```js
const square = n => n * n 
console.log(square(3))
```

```js
const add = (a,b) => a+b 
console.log(add(2,3))
```

```js
const sayHello = () => "Hello there"
console.log(sayHello());
```

```js
const myFunc = (a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
console.log(myFunc(2,3))
```

```js
const myObj = () => ({ cost: 500})
console.log(myObj());
```


## Explanation:
This is because the code inside braces ({}) is parsed as a sequence of statements (i.e. `cost` is treated like a label, not a key in an object literal).
You must wrap the object literal in parentheses