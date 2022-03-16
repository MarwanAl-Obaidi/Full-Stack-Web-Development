// Exercise was hard to do, might need more practice
var list = document.getElementById('sList');
var entry = document.getElementById('formAddItem');
entry.onsubmit = function(item_sapce) {
    item_sapce.preventDefault();
    var new_item = document.getElementById('addItem').value;
    var entry = document.createElement('ol');
    entry.appendChild(document.createTextNode(new_item));
    list.appendChild(entry);
}