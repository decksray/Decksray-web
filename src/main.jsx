import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import JoinUs from "./pages/JoinUs.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
