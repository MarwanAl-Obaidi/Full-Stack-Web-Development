

# Part A (4 points) (ALREADY UNDERSTAND)

## Exercise 1

Your task is to implement a data structure for a product catalog and create queries to retrieve data.

step 1: Create four items, each having the properties of name, model, cost, and quantity (e.g name: item1: {"phone",    model: "android", cost: 299, qty: 51})

step 2: Create an array to hold an inventory of store items (e,g inventory = [])

step 3: Add all four objects to the main array using an array method,

step 4: log the inventory array to the console.

step 5: Access the quantity element of your second item, and log it to the console.  

You can use the following HTML template and provide your answer as the completed script element:

<!DOCTYPE html>
<html>
<head>
    <title>Complete JavaScript Course</title>
</head>
<body>
    <div id="message"></div>
    <div id="output"></div>
    <script src="app.js"></script>
	
</body>
</html>

## Exercise 2

Create an HTML file containing a page element with a class of output using the following code template:

<!DOCTYPE html >
<html>
	<div class="output"></div>
  <script src="app.js"></script>
</html>

create app.js and make the following changes to the output element:

- step 1:  Select the page element as a JavaScript object.
- step 2: Update the textContent property of the selected page element e.g write your name
- step 3: Using the classList.add object method, add a class of red to the element.
- step 4: Update the id property of the element to tester.
- step 5: Through the style object, add a backgroundColor property of red to the page element.
- step 6: Get the document URL via document.URL and 
- step 7: update the text of the output element to contain the value of the document URL. 
- step 8: You can log it in the console first to ensure you have the correct value.

## Exercise 3

convert the following functions to Arrow function:

```js
function add(a,b) {
  return a+b
}
console.log(add(2,3))
```

```js
function square(n) {
  return n * n
}
console.log(square(3)) 
```

```js
function myFunc(a, b){
  let chuck = 42;
  return a + b + chuck;
}
console.log(myFunc(2,3))
```
        

```js
function sayHello() {
     return "Hello there";
}
console.log(sayHello());		
```

```js
function myObj() {
    return { cost: 500};
}
console.log(myObj());		
```
		
## Exercise 4

Use querySelectorAll() to select all matching elements in the following HTML file:

```html
<!doctype html>
<html>
<head>
    <title></title>
</head>
<body>
    <div class="container">
        <div class="myEle">One</div>
        <div class="myEle">Two</div>
        <div class="myEle">Three</div>
        <div class="myEle">Four</div>
        <div class="myEle">Five</div>
    </div>
    <script>
        const eles = document.querySelectorAll(".myEle");
        console.log(eles);
        eles.forEach((el) => {
            console.log(el);
        });
    </script>
</body>
</html>
```


Within a script element, 

- step 1: use QuerySelectorAll() to select all the matching occurrences of the elements with that class and store them in a variable.
- step 2:Output all the elements into the console, first as an array and 
- step 3: then looping through them to output them one by one.





