// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let total = 0
  let avg = 0
  data.forEach(function(data) {
    total += data.price
  })
  avg = total / data.length

console.log("The average price is $" + avg.toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  data.forEach(function(data){
    if (data.price > 14.00 && data.price < 18.00)
    console.log(data.title);
  })

}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  data.forEach(function(data){
    if (data["currency_code"] === "GBP")
    console.log(data.title + " " + data.price + " pounds")
  })
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  data.forEach(function(data){
    if (data.materials.includes("wood")){
    console.log(data.title + " is made of wood")
  }
  })
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  data.forEach(function(data){
    if (data.materials.length >= 8){
    console.log(data.title + " has " + data.materials.length + " materials:")
    data.materials.forEach(function(data){
      console.log("- " + data)
    })
    }
  })
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let me = 0
  data.forEach(function(data){
    if (data.who_made === "i_did")
    me = me + 1
  })
console.log(me + " were made by their sellers.");
}
