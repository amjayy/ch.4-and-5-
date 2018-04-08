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

var listItems = document.querySelectorAll('li'); //ALL <li> elements 

//ADD A CLASS OF COOL TO ALL LIST ITEMS
var li; 	//Counter variable
for (i = 0; i < listItems.length; i++) { //Loop through Elements
	listItems[i].className = 'cool' ; // change class to cool
}

// ADD number of items in the list of the heading 
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; 				// No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;
