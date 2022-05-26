import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const changeSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (<div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilterYear={changeSelectedYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList data={filteredExpenses} />
        </Card>
    </div>
    );
};
export default Expenses;