import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { AdminHome } from "./components/AdminHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminhome" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
