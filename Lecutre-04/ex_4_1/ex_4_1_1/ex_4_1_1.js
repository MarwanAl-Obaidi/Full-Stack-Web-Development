const inventory = [];

const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 250,
    qty: 5
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}
const item3 = {
    name: "computer",
    model: "imac",
    cost: 800,
    qty: 12
}
const item4 = {
    name: "myName",
    model: "myModel",
    cost: 200,
    qty: 3
}

inventory.push(item1, item2, item3,item4);
console.log(inventory);
console.log(inventory[1].qty);