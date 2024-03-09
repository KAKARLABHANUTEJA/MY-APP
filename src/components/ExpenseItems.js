import './ExpenseItems.css';
function ExpenseItems(props){
    const expenseDate = new Date();
    //const expenseDate = new Date(2021,2,28) - to set a specific date;
    const expenseTitle = "Car Insurance";
    const expenseAmount = 300;
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();
    return (
        //<h2>Expense Item!!</h2>
        // <div className="expense-item">
        //     <div>July 19, 2023</div>
        //     <div>
        //         <h2>Mobile Insurance</h2>
        //         <div>$65.99</div>
        //     </div>
        // </div>
        //before using props
        // <div className="expense-item">
        //     <div>{expenseDate.toISOString()}</div>
        //     <div className="expense-item__description">
        //         <h2>{expenseTitle}</h2>
        //         <div className="expense-item__price">${expenseAmount}</div>
        //     </div>
        // </div>

        //after using props
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItems;