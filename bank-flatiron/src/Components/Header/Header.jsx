import React, { useState, useEffect } from "react";
import Transactions from "../Body/Body";

function Header (){
    const [date,setDate]= useState("");
    const [description,setDescription]= useState("");
    const [category,setCategory]= useState("");
    const [amount,setAmount]= useState("");   
    const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
    .then(res =>res.json())
    .then(transactions =>{
      setData(transactions)
    },[])
  })
    function handleSubmit(e){
        e.preventDefault()
        const transObj = {date:date, description:description, category:category, amount:parseFloat(amount)};
    
        fetch("http://localhost:3000/transactions", {
          method: POST,
          Headers:{
            "contentType":"application/json"
          },
          body:JSON.stringify(transObj)
        })
        .then(res =>res.json())
        .then(data=>{
          const trans =[...trans, data]
          setData(newtrans)
        })
        .alert("Transaction added successfully")
      }

return(
    <div className= "first-header">
        <h1>Bank of Flatiron</h1>
        <form className="add-transactions" onSubmit={handleSubmit}>
            <input type = "date" placeholder= "Date" value ={date} onChange ={(e)=>setDate(e.target.value)} /> 
            <input type = "text" placeholder= "Description" value ={description} onChange ={(e)=>setDescription(e.target.value)} />
            <input type = "text" placeholder= "Category" value ={category} onChange ={(e)=>setCategory(e.target.value)} />
            <input type = "number" placeholder= "Amount" value = {amount} onChange ={(e)=>setAmount(e.target.value)} />
        </form> 
        <p></p>
        <button className="submitbtn">Submit</button>
        <p></p>

        {data.map(transactions=>(
        <Transactions date = {transactions.date} description = {transactions.description} category = {transactions.category} amount = {transactions.amount} key ={transactions.id}/>
      ))}
    </div>
    
)
}export default Header;