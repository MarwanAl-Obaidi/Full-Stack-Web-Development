
# Part B (6 points) Also a bonus

## Exercise 1

use the following html:

```html
<!DOCTYPE html>
<html>
<head>
<div class="output">
    <h1>Hello</h1>
    <div>Test</div>
    <ul>
        <li id="one">One</li>
        <li class="red">Two</li>
    </ul>
    <div>Test</div>
</div>
</body>
</html>
```

Take the following steps to understand how HTML elements can be manipulated with JavaScript code.

- Select the element with the class output.
- Create another JavaScript object called mainList and select only the ul tag that is within the output element. Update the ID of that ul tag to mainList.
- Search for the tagName of each div, and output them into the console as an array.
- Using a for loop, set the ID of each of the div tags to id with a numeric value of the order they appear within output. 

- Extra (Optional):
Still within the loop, alternate the color of the contents of each element in output to be red or blue.


## Exercise 2

Shopping list: Using the following HTML template, update the code to add new items to the list of items on the page. Once the button is clicked, it will add a new item to the list of items:

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
    </style>
</head>
<body>
    <div id="message">Complete JavaScript Course</div>
    <div>
        <input type="text" id="addItem">
        <input type="button" id="addNew" value="Add to List"> </div>
    <div id="output">
        <h1>Shopping List</h1>
        <ol id="sList"> </ol>
    </div>
    <script>
    </script>
</body>
</html>
```


Take the following steps:

-Select the page elements as JavaScript objects.
-Add an onclick event listener to the add button. Once the button is clicked, it should add the contents of the input field to the end of the list. You can call the function addOne().
-Within addOne(), create li elements to append to the main list on the page. Add the input value to the list item text content.
-Within the addOne() function, get the current value of the addItem input field. Use that value to create a textNode with that value, adding it to the list item. Append the textNode to the list item.




## Exercise 3 

Star rating system
Create a star rating component that is fully interactive and dynamic using JavaScript.

You can use the following HTML and CSS as a starting template. Provide the completed script element as your answer.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Star Rater</title>
    <style>
        .stars ul {
            list-style-type: none;
            padding: 0;
        }
        .star {
            font-size: 2em;
            color: #ddd;
            display: inline-block;
        }
        .orange {
            color: orange;
        }
        .output {
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <ul class="stars">
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
    </ul>
    <div class="output"></div>
	
    <script src="app.js"></script>     

</body>
</html>
```
Hints Take the following steps:

- Select all the stars within the ul that have a class of stars into an object, and create another object for the output element.
- Create another object to contain the results of calling querySelectorAll() on elements with a class of star.
- Loop through the resulting node list, adding to the element object the value of the index plus 1, and adding an event listener listening for a click. Attach a function called starRate() to the click event of each star element.
- Within the starRate() function, add to the output the value of the star using the event target and the element object's star value, which was set in the previous step.
- Loop through all the stars using forEach() to check if the index value of the star element is less than the star value; if it is, apply a class of orange. Otherwise, remove the class of orange from the classList element.