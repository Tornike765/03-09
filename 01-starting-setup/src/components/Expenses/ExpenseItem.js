import "./ExpenseItem.css";
import expenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";
let title = props.title;

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log("ExpenseItem evaluated by react");

    const clickHandler = () => {
        setTitle = "updating";
        console.log("clicked!!!");
    }
}
    return (
        <card className="Expense-item">
            <div>
                <ExpenseItem date={props.date}/>
            </div>
            <div className="Expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="Expense-item__price">${expenseAmount}</div>
    </div>
            <button onClick={clickHandler}>Change Title</button>
</card>
    );
    }
export default ExpenseItem;