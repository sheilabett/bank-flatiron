import React, { useState } from "react";

function Transaction({ transactionId, date, description, category, amount, onDelete }) {
  const [isDeleted, setIsDeleted] = useState(false);

  function handleDelete() {
    setIsDeleted(true);
    onDelete(transactionId);
  }

  if (isDeleted) {
    return null;
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="deleteBtn" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;