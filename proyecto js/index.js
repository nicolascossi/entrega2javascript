// - Objetos 
// - Arrays 
// - Al menos dos métodos superiores de arrays (find, filter, sort, reduce, map, etc) 
// - Funciones esenciales del proceso a simular (functions) 
// - Interacción con el usuario por medio de prompts y alerts


let products = [
  { name: "Tablet", price: 200 },
  { name: "Laptop", price: 800 },
  { name: "Smartphone", price: 500 }
];

let total = 0;
let continueShopping = true;

function sumar(total, price) {
    return total + price;
}

function findProduct(products, name) {
  return products.find(product => product.name === name);
}

function displayProducts(products) {
  let options = products.map((product, index) => `${index + 1}. ${product.name} - $${product.price}`);
  return options.join("\n");
}

while (continueShopping) {
  let options = displayProducts(products);
  let userChoice = parseInt(prompt("Please select a product:\n" + options));
  let selectedProduct = products[userChoice - 1];
  if (selectedProduct) {
    total = sumar(total, selectedProduct.price);
    console.log("You have selected: " + selectedProduct.name + " - $" + selectedProduct.price);
  } else {
    console.log("Invalid selection. Please choose a number between 1 and 3.");
  }
  console.log("Current total: $" + total);
  let keepShopping = prompt("Do you want to continue shopping? Type 'yes' or 'no'").toLowerCase();
  if (keepShopping === "no") {
    continueShopping = false;
  }
}
console.log("Total: $" + total);
alert("Total: $" + total + "\nThank you for shopping with us!");

