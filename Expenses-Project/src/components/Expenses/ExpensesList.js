import React from 'react';

// css
import './ExpensesList.css';

// components
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    // condition if empty year
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    

    return (
        <ul className="expenses-list">
            {props.items.map(filterArray =>
                <ExpenseItem
                    key={filterArray.id}
                    title={filterArray.title}
                    amount={filterArray.amount}
                    date={filterArray.date}
                />
            )}
        </ul>
    );
}

export default ExpensesList;