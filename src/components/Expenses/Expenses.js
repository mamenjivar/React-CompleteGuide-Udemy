import React, { useState } from 'react';

// css
import '../Expenses/Expenses.css';

// components
import ExpenseItem from '../Expenses/ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

// component styling
import Card from '../UI/Card';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019')

    const newExpenseHandler = (enteredFilterYear) => {
        setFilteredYear(enteredFilterYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onNewExpense={newExpenseHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    )
}

export default Expenses;