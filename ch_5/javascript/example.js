// Adding items to the start and end of the list 
var list = document.getElementsByTagName('ul')[0]; // Get the <ul> element

// ADD NEW ITEM TO THE END OF LIST
var newItemLast = document.createElement('li'); // Create element
var newTextLast = document.createTextNode('cream'); // Create text node 
newItemLast.appendChild(newTextLast); // add text node to element
list.appendChild(newItemLast); // add element to end of list

// Add new item start of list
var newItemFirst = document.createElement('li'); // create element
var newTextFirst = document.createTextNode('kale'); // create text node
newItemFirst.appendChild(newTextFirst); // add text node to element
list.insertBefore(newItemFirst, list.firstChild); // add element to list