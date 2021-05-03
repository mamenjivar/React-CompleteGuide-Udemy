import React, { useState } from 'react';

// components
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// LOCAL DB
import DUMMY_EXPENSES from './local_DB';

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
