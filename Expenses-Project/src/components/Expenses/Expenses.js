import React, { useState } from 'react';

// css
import '../Expenses/Expenses.css';

// components
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

// component styling
import Card from '../UI/Card';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019')

    const newExpenseHandler = (enteredFilterYear) => {
        setFilteredYear(enteredFilterYear);
    }

    // filter the years
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear} 
                    onNewExpense={newExpenseHandler} 
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;