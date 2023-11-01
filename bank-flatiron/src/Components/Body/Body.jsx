import React from "react";
const Transactions = ({date, description, category, amount}) =>{
    return(
        <div className="your-transactions">
            <table className = "my-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td>{amount}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
export default Transactions;