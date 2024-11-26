import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Catalogue />} />
            </Routes>
        </Router>
    );
}

export default App;
