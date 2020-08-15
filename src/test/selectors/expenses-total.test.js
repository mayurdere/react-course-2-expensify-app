import selectExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const expenses = [];
    const result = selectExpensesTotal([]);
    expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const expense = [{
        id: '1',
        description: 'Gum',
        note: '',
        amount: 245,
        createdAt: 0
    }];
    const result = selectExpensesTotal(expense);
    expect(result).toEqual(expense[0].amount / 100);
}); 

test('should correctly add up multipe expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(
        (expenses[2].amount + expenses[1].amount + expenses[0].amount)/ 100
    );
});
