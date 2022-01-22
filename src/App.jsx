import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Tutorial from "./components/Tutorial";
import { transactionContext } from "./components/transactionContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [address, setAddress] = useState("4983467");
  const [amount, setAmount] = useState(0);
  const [keyword, setKeyword] = useState("null");
  const [message, setMessage] = useState("hello ites me");

  return (
    <Router>
      <div className="min-h-screen">
        <div className="bg-[#0D182A]">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <transactionContext.Provider
                value={{
                  address,
                  setAddress,
                  amount,
                  setAmount,
                  keyword,
                  setKeyword,
                  message,
                  setMessage,
                }}>
                <Welcome />
              </transactionContext.Provider>
            </Route>
            <Route  path="/tutorial">
              <Tutorial />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
