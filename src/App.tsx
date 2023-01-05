import React from "react";
import "./App.css";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <Invoices />
        </Navbar>
      </header>
    </div>
  );
}

export default App;
