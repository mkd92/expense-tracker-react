import Header from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

import AddTransaction from "./components/AddTransaction";

import TransactionList from "./components/TransactionList";

import IncomeExpenses from "./components/IncomeExpenses";

import Balance from "./components/Balance";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
