import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>
        History
        <ul id="list" className="list">
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      </h3>
    </>
  );
};

export default TransactionList;
