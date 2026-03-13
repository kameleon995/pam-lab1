const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

let totalExpense = expenses.reduce((sum, expense) => sum + expense, 0);

console.log(`Expenses total: \$${totalExpense}`);
console.log(`Average expense: \$${(totalExpense/expenses.length).toFixed(2)}`);

let maxExpense = 0;
expenses.forEach(expense => {
	maxExpense = (expense > maxExpense) ? expense : maxExpense;
});

console.log(`Greatest expense: \$${maxExpense}`);