import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Transaction() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  // Define event handler functions for each button click
  const handleDeposit = () => {
    dispatch({ type: "DEPOSIT", amount: parseFloat(amount) });
    setAmount(""); // Reset entered amount to an empty string
  };

  const handleWithdraw = () => {
    dispatch({ type: "WITHDRAW", amount: parseFloat(amount) });
    setAmount("");
  };

  const handleAddInterest = () => {
    dispatch({ type: "ADD_INTEREST" }); // Dispatch ADD_INTEREST action with no amount value needed
  };

  const handleCharges = () => {
    dispatch({ type: "CHARGES" }); // Dispatch CHARGES action with no amount value needed
  };

  // Render the input field and buttons with their corresponding event handler functions
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleAddInterest}>Add Interest</button>
      <button onClick={handleCharges}>Charges</button>
    </div>
  );
}

export default Transaction;
