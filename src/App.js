import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/steps/LoginPage";
import MainPage from "./components/steps/Mainpage";
import AdminPage from "./components/steps/AdminPage";
import Dashboard from "./components/steps/Dashboard";
import AdminQuery from "./components/steps/AdminQuery"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/query" element={<AdminQuery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
