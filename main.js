// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total = 0;
  let avg = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].price;
  }avg = (total / data.length).toFixed(2);
console.log("The average price is $" + avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let priceArray = []
  for (var i = 0; i < data.length; i++) {
    data[i].price
    if (data[i].price > 14.00 && data[i].price < 18.00)
    priceArray.push(data[i].title)
  }
console.log(priceArray);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    data[i]["currency_code"]
    if (data[i]["currency_code"] === "GBP")
    console.log(data[i].title + " " + data[i].price + " pounds");
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = []
  for (var i = 0; i < data.length; i++) {
    data[i].materials
    if (data[i].materials.includes("wood"))
    woodItems.push(data[i].title + " is made of wood")
  }
console.log(woodItems);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let atePlus = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8)
    atePlus.push(data[i].title + " has " + data[i].materials.length + " materials: " + data[i].materials)
  }
console.log(atePlus);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let me = 0
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did")
    me = me + 1
  }
console.log(me + " were made by their sellers.");
}
