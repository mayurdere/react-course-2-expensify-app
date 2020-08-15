import React from 'react';
import { connect } from 'react-redux';
import ExpenseListitem from './ExpenseListitem';
import expenseTotal from '../selectors/expenses-total';

export const ExpenseAmountTotal = (props) => (
    <div>
        {
            <h1>All time total expense: {props.expenseTotalAmount}</h1>
        }
    </div>
);

const mapStateToProps =  (state) => {
    return {
        expenseTotalAmount: expenseTotal(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpenseAmountTotal);