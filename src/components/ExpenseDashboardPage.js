import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseAmountTotal from './ExpenseAmountTotal';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
        <ExpenseAmountTotal/>
    </div>
);

export default ExpenseDashboardPage;