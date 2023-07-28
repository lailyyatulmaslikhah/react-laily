import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtectedAdmin from "./ProtectedAdmin";
import '../App.css'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/user",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password}),
            });

            if (!response.ok) {
                const { message } = await response.json();
                setError(message);
                return;
            }

            const { token } = await response.json();
            //Simpan token di local storage
            localStorage.setItem("token", token);
            // console.log("Login successful. Token:", token);

            //Set isLoggedIn state to true
            setLoggedIn(true);
            navigate("admin");
        } catch (error) {
            setError("Terjadi kesalahan saat login");
            console.error("Login error:", error.message);
        }
    };

    return(
        <div>
            <div class="kotak_login">
            <h1 class="tulisan_login">Login</h1>
            {error && <div>{error}</div>}
            {loggedIn ? (
                <ProtectedAdmin />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username : </label>
                        <input 
                        type="text"
                        id="username"
                        class="form_login"
                        placeholder="Username atau email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password : </label>
                        <input 
                        type="password"
                        id="password"
                        class="form_login"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />

                    </div>
                    <div class="content">
                        <input 
                        type="checkbox"
                        id="ingatkan-saya"
                        />
                        <label for="ingatkan-saya">Ingatkan saya</label>
                    </div>
                    <div>
                        <button type="submit" class="tombol_login">Login</button>
                    </div>
                </form>
            )}
            </div>
        </div>
    );
};

export default LoginForm;