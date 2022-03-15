// step 1: Create an array to hold an inventory of store items
const inventory = [];

// step 2: Add all four objects
const item4 = {
    name: "myName",
    model: "myModel",
    cost: 200,
    qty: 3
}
const item3 = {
    name: "computer",
    model: "imac",
    cost: 800,
    qty: 12
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}
const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 250,
    qty: 5
}

// step 3: Add all four objects
inventory.push(item1, item2, item3,item4);
// step 4:
console.log(inventory);

// step 5:Access the quantity element of your second item,
console.log(inventory[1].qty);