import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (<div>

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilterYear={changeSelectedYearHandler} />
            <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}></ExpenseItem>
            <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}></ExpenseItem>
            <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}></ExpenseItem>
            <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}></ExpenseItem>
        </Card>
    </div>
    );
}
export default Expenses;