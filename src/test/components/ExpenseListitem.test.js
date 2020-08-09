import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListitem } from '../../components/ExpenseListitem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListitem with expenses', () => {
    const wrapper = shallow(<ExpenseListitem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});