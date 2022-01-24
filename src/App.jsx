import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Swap from "./components/Swap";
import NftIssuance from "./components/NftIssuance";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D182A]">
        <div className="bg-[#0D182A]">
          <Navbar />
          <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route  path="/swap">
              <Swap />
            </Route>
            <Route  path="/nftissuance">
              <NftIssuance />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
