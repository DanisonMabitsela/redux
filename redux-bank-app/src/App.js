import React from "react";
import Balance from "./componenets/Balance";
import Transaction from "./componenets/Transaction";

function App() {
  return (
    <div>
      <h1>My Account</h1>
      <Balance />
      <Transaction />
    </div>
  );
}

export default App;
