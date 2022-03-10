# 1- Warmup (ALREADY UNDERSTAND)

Use the code in "template" folder as a starting point.

## Part A: Basics

- What do you think the result of running the following code snippet will be?

```js
let nr1 = 3;
let nr2 = "2";
console.log(nr1 * nr2);
```

6
32
other

- What do you think the result of running the following code snippet will be?

```js
let nr1 = 3;
let nr2 = "2";
console.log(nr1 + nr2);
```
5
32
other

 
- What data type is the following variable?

```js
const c = "5";
```

- What data type is the following variable?

```js

```
- Which one is generally better, line 1 or line 2?

```js
let empty1 = undefined; //line 1
let empty2 = null; //line 2
```


- What is the console output for the following?

```js
let a = "Hello";
a = "world";
console.log(a);
```

- What will be logged to the console?

```js
let a = "world";
let b = `Hello ${a}!`;
console.log(b);
```

- What is the value of a?

```js
let a = "Hello";
a = prompt("world");
console.log(a);
```

- What is the value of b output to the console?

```js
let a = 5;
let b = 70;
let c = "5";
b++;
console.log(b);
```

- What is the value of result?

```js
let result = 3 + 4 * 2 / 8; 
```

- What is the value of total and total2?

```js
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);
```

- What is logged to the console here?

```js
const a = 5;
const b = 10;
console.log(a > 0 && b > 0); 
console.log(a == 5 && b == 4); 
console.log(true ||false); 
console.log(a == 3 || b == 10); 
console.log(a == 3 || b == 7); 
```

- What is the output in the console?

```js
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
```

- How do you replace the second element in myArr with the value 4?

```js
myArr = [1,3,5,6,8,9,15] 
```

- What is the output in the console?

```js
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);
```

- What is the output in the console?

```js
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
```

## Part B: Logic Statements

- What will be outputted to the console in this instance?

```js
const q = '1';
switch (q) {
    case '1':
        answer = "one";
        break;
    case 1:
        answer = 1;
        break;
    case 2:
        answer = "this is the one";
        break;
    default:
        answer = "not working";
}
console.log(answer);
```

- What will be outputted to the console in this instance?

```js
const q = 1;
 
switch (q) {
    case '1':
        answer = "one";
    case 1:
        answer = 1;
    case 2:
        answer = "this is the one";
        break;
    default:
        answer = "not working";
}
console.log(answer);
```

- What will be outputted to the console in this instance?

```js
let login = false;
let outputHolder = "";
let userOkay = login ? outputHolder = "logout" : outputHolder = "login";
console.log(userOkay);
```

- What will be outputted to the console in this instance?

```js
const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
    htmlOutput = "Welcome, that is a user";
} else {
    htmlOutput = "Denied, not a user ";
}
console.log(htmlOutput + ": " + userInput);
```

- What will be outputted to the console in this instance?

```js
let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
    output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
    output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
    output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
    output = "Dinner time";
} else if (myTime >= 22) {
    output = "Time to go to sleep";
} else {
    output = "You should be sleeping";
}
console.log(output);
```

- What will be outputted to the console in this instance?

```js
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a);
console.log(a > b && b > a);
console.log(d > b || b > a);
console.log(d > b && b > a);
```

- What will be outputted to the console in this instance?

```js
let val = 100;
let message = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
console.log(message);
let check = (val % 2) ? `Odd` : `Even`;
check = `${val} is ${check}`;
console.log(check);
```

## Part C: Loops 

- What is the expected output for the following code?

```js
let step = 3;
 
for (let i = 0; i < 1000; i += step) {
    if (i > 10) {
        break;
    }
    console.log(i);
}
```

- What is the final value for myArray, and what is expected in the console?

```js
const myArray = [1,5,7];
for(el in myArray){
    console.log(Number(el));
    el = Number(el) + 5;
    console.log(el);
}
console.log(myArray);
```



## Part D: Functions

- What value is output into the console?

```js
let val = 10;
function tester(val){
    val += 10;
    if(val < 100){
        return tester(val);
    }
    return val;
}
tester(val);
console.log(val);
```

- What will be output into the console by the below code?

```js
let testFunction = function(){
    console.log("Hello");
}();
```

- What will be output to the console?

```js
let test2 = (num) => num + 5;
console.log(test2(14));
```

- What will be output to the console?

```js
var addFive1 = function addFive1(num) {
return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14));
```

