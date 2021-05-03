// DON'T NEED THIS ANYMORE
import React, { useState } from 'react';

// components
import ExpenseForm from './ExpenseForm';

// css
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // passing data child->parent
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditing={cancelEditingHandler} /> :
                <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    );
};

export default NewExpense;