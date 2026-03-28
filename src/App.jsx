import { StaticRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Join from "./pages/Join.jsx";
import "./main.css";
import { Navigate } from "react-router-dom";
import "./i18n";


export default function MainApp() {
    return (
        <StaticRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/join" element={<Join />} />
                <Route path="/qr" element={<Navigate to="/" replace />} />
            </Routes>
        </StaticRouter>
    )
}
