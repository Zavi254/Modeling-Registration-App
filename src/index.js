import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import LandingPage from "./pages/LandingPage";
import UserRegistration from "./pages/UserRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<LandingPage />} />
        <Route index path='/userRegistration' element={<UserRegistration />} />
        <Route index path='/adminDashboard' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
