// DON'T NEED THIS ANYMORE
import React from 'react';

// components
import ExpenseForm from './ExpenseForm';

// css
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // passing data child->parent
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }



    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;