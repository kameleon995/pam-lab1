const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 }
];

const discountThreshold = 30;
const discountPercent = 10;

function displayCartWithSubtotals(cart) {
  cart.map(item => `${item.quantity} x ${item.name} --- $${item.subtotal.toFixed(2)}`).forEach(item => console.log(item));
}

let cartSubtotaled = cart.map(item => newItem = {...item, subtotal: item.price * item.quantity});

displayCartWithSubtotals(cartSubtotaled)

let total = cartSubtotaled.reduce((sum, item) => sum + item.subtotal, 0);
let discount = -1;

if (total >= discountThreshold) {
  discount = total * discountPercent / 100;
}

console.log(`\nTotal: $${total.toFixed(2)}`);
if (discount > 0) {
  console.log(`Discount amount: $${discount.toFixed(2)}\nTo pay: $${(total - discount).toFixed(2)}`);
}
