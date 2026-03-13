const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false }
];

console.log("Shopping list:");
shoppingList.forEach(item => console.log(`${item.name} -> ${item.quantity} szt.${item.urgent ? " !!!" : ""}`));

let important = shoppingList.filter(item => item.urgent);
console.log("\nImportant items:");
important.map(item => console.log(`${item.name} -> ${item.quantity} szt.`));

let itemNamesUpper = shoppingList.map(item => item.name.toUpperCase());
console.log("Item names in upper case:");
itemNamesUpper.forEach(item => console.log(item));