// Javascript for Tables: Store Menu

"use strict;"
// window.alert("Javascript Connected");

// place table data array here
var inventory = [
	{item: "gnarlyFries", price: 3.30},
	{item: "funkyFudge", price: 2.20},
	{item: "superSoda", price: 1.10},
	{item: "biggaBurger", price: 6.60},
	{item: "pisaPizza", price: 7.70},
	{item: "juicyJambalaya", price: 5.50},
	{item: "gigaGratuity", price: 42},	
	{item: "Straw", price: 0},
	{item: "Napkins", price: 0},
];

// name variable to hold HTML code while building table.
var tableHTML = "<table>\n" + 
		"<caption>Yummy Menu</caption>\n" + 
		"<tr>\n" + 
		"<th>item</th>\n" + 
		"<th>price</th>\n" + 
		"</tr>\n";
// add row for each product
for (var i = 0; i < inventory.length; i++) {
	// add table row for each tableDataArray[i]
	tableHTML += "<tr>\n<td>" + inventory[i].item + "</td>\n";
	tableHTML += "<td id='price'> $ " + inventory[i].price.toFixed(2) + "</td>\n</tr>\n"
}

// close table tag
// tableHTML = tableHTML + "</table>";
tableHTML += "</table>";
// didplay tableHTML in div.menu
document.getElementById("menu").innerHTML = tableHTML;

// Capture the data to add to order: itemName, itemQuant
function addItem () {
	if ((document.getElementById("itemName").value == "")
        || (document.getElementById("itemQuant").value == "")) {
		window.alert("Please enter item and quantity.");
  } else {
		var item = document.getElementById("itemName").value;
		const quant = document.getElementById("itemQuant").value;

		
		// calculate price of item(s) by iterating through 
		// tableDataArray searching for the named object. 
		// If item is not found, then alert() user. 

		let thisCost = "";
		
 		for (i=0; i<inventory.length; i++){
 			if (inventory[i].item == item) {
 				thisCost = inventory[i].price * quant;
 				break;
 // Weird bugs arose when attempting to error-check menu order.
 //			} else {
 //				window.alert("Regrets, we do not offer that item.");
 //				return;
 			}
 		}
		
		// ADDING NEW ITEM PRICE TO PREVIOUS PRICE IS VERRA DIFFICULT.
		// Display - Quantity Item "at" Price "=" Total
		thisCost = parseFloat(thisCost);

		tempPrice = parseFloat(document.getElementById("totalPrice").innerHTML);
		thisCost += tempPrice;
		thisCost = thisCost.toFixed(2);
		document.getElementById("totalPrice").innerHTML = thisCost;
		document.getElementById("textareaSummary").value += quant + "  " + item;
		document.getElementById("textareaSummary").value += "\n";

  }
}

function newOrder () {
// implement: Clear data fields for order summary and total price.
	document.getElementById("totalPrice").innerHTML = "0";
	document.getElementById("textareaSummary").value = "";
}

let itemName = "";
let itemQuant = 0;
addItem.onclick = function(itemData){
console.log("Clicked");
	itemName = document.getElementById("itemName").value;
	itemQuant = document.getElementById("itemQuant").value;
console.log("itemName = " + itemName);
console.log("itemQuant = " + itemQuant);
};

/* ---------- ---------- ---------- ---------- ---------- */
/* _______ Navigation Bar _________________________________ */

			function myFunction() {
  			var x = document.getElementById("myTopnav");
  			if (x.className === "topnav") {
    			x.className += " responsive";
					console.log("changed to responsive");
  			} else {
    			x.className = "topnav";
					console.log("changed to remove responsive");
  			}
		  }
			


/* ___ END Navigation Bar _________________________________ */



