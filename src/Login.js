import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                email,
                password,
            });
            const { token } = response.data;
            localStorage.setItem("token", token);
            window.location.href = "/users"; // Redirect to Users List
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form onSubmit={handleLogin} style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
                <h2>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: "100%", margin: "8px 0", padding: "8px" }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", margin: "8px 0", padding: "8px" }}
                    />
                </div>
                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px" }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;