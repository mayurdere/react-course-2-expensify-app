import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import expensesReducer from './reducers/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1200 }));
store.dispatch(addExpense({ description: 'NEw', amount: 209500, createdAt: 1600 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'test', amount: 200, createdAt: 1200 }));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
