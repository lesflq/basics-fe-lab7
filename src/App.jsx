import React from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Task1 from "./pages/Task1.jsx";
import Task2 from "./pages/Task2.jsx";

const App = () => {

    return (
        <div>
            <BrowserRouter basename='/basics-fe-lab7'>
                <Router>
                    <Routes>
                        <Route path="/task1" element={<Task1/>} />
                        <Route path="/task2" element={<Task2/>} />
                    </Routes>
                </Router>
            </BrowserRouter>
        </div>
    );
};

export default App;
