import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should genetrate set sortByAmount action object', () => {
    const action = sortByAmount({ amount: '123' });
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should genetrate set sortByDate action object', () => {
    const action = sortByDate({ date: 123645 });
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should genetrate set setTextFilter action object', () => {
    const text = 'something new';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should genetrate set default setTextFilter action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

