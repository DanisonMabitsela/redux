import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const balance = useSelector((state) => state.balance);

  return <h2>Balance: {balance}</h2>;
}

export default Balance;
