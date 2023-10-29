import React from "react";
const Transactions = ({date, description, category, amount}) =>{
    return(
        <div className="your-transactions">
            <table className = "my-table">
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                <tbody>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{amount}</td>
                </tbody>

            </table>
        </div>
    )
}
export default Transactions;