import React from "react";
import "./App.css";
import Invoices from "./components/InvoicesPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Payment from "./components/Payment";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Invoices />
            </Navbar>
          }
        />
        <Route
          path="/invoices"
          element={
            <Navbar>
              <Invoices />
            </Navbar>
          }
        />
        <Route path="/payment/:id" element={<Payment />} />
      </Routes>
    </Box>
  );
}

export default App;
