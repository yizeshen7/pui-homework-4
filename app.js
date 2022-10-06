let allRolls = [
  {
    glazing: "Keep Original",
    price: 0,
  },
  {
    glazing: "Sugar Milk",
    price: 0,
  },
  {
    glazing: "Vanilla Milk",
    price: 0.5,
  },
  {
    glazing: "Double Chocolate",
    price: 1.5,
  },
];

let allSizes = [
  {
    pack: "1",
    size: 1,
  },
  {
    pack: "3",
    size: 3,
  },
  {
    pack: "6",
    size: 5,
  },
  {
    pack: "12",
    size: 10,
  },
];

/**
 * Updates the UI to display a particular car's info.
 * @param roll A car object containing a model and a description.
 */

let price = 0;
let amount = 1;

function displayPrice() {
  let rollGlazing = document.querySelector("#glazing");
  let rollAmount = document.querySelector("#packSize");

  totalPrice.innerText = "$" + ((2.49 + price) * amount).toFixed(2);
}

function onSelectValueChangeGlazing() {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.
  console.log("You selected " + this.value);

  // We need to convert the string value to an integer
  let rollIndex = parseInt(this.value);

  // Now retrieve the object at the index specified by the select's value
  let rollToDisplay = allRolls[rollIndex];

  price = rollToDisplay.price;

  // Update the UI
  displayPrice();
}

function onSelectValueChangeAmount() {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.
  console.log("You selected " + this.value);

  // We need to convert the string value to an integer
  let sizeIndex = parseInt(this.value);

  // Now retrieve the object at the index specified by the select's value
  let sizeToDisplay = allSizes[sizeIndex];

  amount = sizeToDisplay.size;

  // Update the UI
  displayPrice();
}

let selectElementGlazing = document.querySelector("#glazing");
let selectElementAmount = document.querySelector("#packSize");

selectElementGlazing.addEventListener("change", onSelectValueChangeGlazing);
selectElementAmount.addEventListener("change", onSelectValueChangeAmount);

/*
// When the page loads, find the select element.
let selectElement = document.querySelector("#car-select");

// Let's add a new car to the allCars array.
let newCar = {
  model: "Honda Odyssey",
  description: "A practical minivan for soccer moms and everyone else.",
};
allCars.push(newCar);

// We also need to add this new car to the UI. To do that, create a new
// 'option' HTML element, set its attributes, and add it to the select
// element.
var option = document.createElement("option");
option.text = newCar.model;
option.value = allCars.length - 1; // Its value should be the index of the last element in allCars
selectElement.add(option);

// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...
selectElement.addEventListener("change", onSelectValueChange);

// Initially, display the first car
displayCar(allCars[0]);

*/
