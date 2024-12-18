import React, {useState} from "react";

import expensesForm from "./NewExpenses.css";

const expensesForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        )
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__cotrol">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__cotrol">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHadler}/>
            </div>
            <div className="new-expense__cotrol">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>
}

export default NewExpenses;