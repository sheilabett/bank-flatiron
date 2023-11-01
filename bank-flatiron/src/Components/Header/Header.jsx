import React, { useState, useEffect } from "react";
import Transactions from "../Body/Body";
import AddTransaction from "./AddTransaction";
import Search from "./Search";

function Header (){  
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
    .then(res =>res.json())
    .then(transactions =>{
      setData(transactions)
    },[searchTerm])
  })
  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }
    // function handleSubmit(e){
    //     e.preventDefault()
    //     const transObj = {
    //         date:date, 
    //         description:description, 
    //         category:category, 
    //         amount:parseFloat(amount)
    //     }
    
    //     fetch("http://localhost:3000/transactions", {
    //       method: "POST",
    //       headers:{
    //         "Content-Type":"application/json"
    //       },
    //       body: JSON.stringify(transObj)
    //     })
    //     .then(response =>response.json())
    //     .then(transactions=>{
    //       const newtrans =[...data, transactions]
    //       setData(newtrans)
    //       alert("Transaction added successfully")
    //     })
        
    //   }

return(
    <div className= "first-header">
        <h1>Bank of Flatiron</h1>
        <Search handleSearch={handleSearch} searchTerm={searchTerm} />
        <p></p>
        <AddTransaction/>
        {data.map(transactions=>(
        <Transactions date = {transactions.date} description = {transactions.description} category = {transactions.category} amount = {transactions.amount} key ={transactions.id}/>
      ))}
    </div>
    
)
}export default Header;