import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
})

function Expenses(props) {
    return (
        <div className="expenses">
            {props.items.map(<expenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
            <ExpenseItem
            title={props.items [0].title}
            amount={props.items [0].amount)
                date={props.items [0].date}
                ></ExpenseItem>
                <ExpenseItem
                title={props.items [1].title}
            amount={props.items [1].amount}
            date={props.items [1].date}
        ></ExpenseItem>
            {filteredExpenses.map((expense) => {
    <ExpenseItem
        key={expense.id}
        title={props.items [2].title}
        amount={props.items [2].amount)
            date={props.items [2].date}
            ></ExpenseItem>
            ))}
            <ExpenseItem
            title={props.items [3].title}
        amount={props.items [3].amount}
        date={props.items [3].date}
    ></ExpenseItem>
        </div>
);

export default ExpenseDate;