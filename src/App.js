import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import UsersList from "./UsersList";

const App = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/users"
                    element={isAuthenticated ? <UsersList /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
};

export default App;