

export default (expenses) => {

    const amountsArray = expenses.map(expense => {
        return expense.amount / 100;
    });

    const totalAmount = amountsArray.reduce(
    (sum, value, index)=>sum+value, 0);
    return totalAmount;
};