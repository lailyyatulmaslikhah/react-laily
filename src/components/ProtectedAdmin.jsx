import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBook from "../books/AddBook";



const ProtectedAdmin = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        //hapus token dari localstorage
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        //Periksa keberadaan token JWT di local storage
        const token = localStorage.getItem("token");

        // Jika token tidak tersedia, redirect ke halaman login
        if (!token) {
            navigate("/login", { replace: true});
        }

        // Jika token tersedia, lanjutkan ke render komponen ProtectedAdmin
    }, [navigate]);

    return (
        <>
            <button class="button_logout" onClick={handleLogout}>LOGOUT</button>
        <div className="container">
           <AddBook/>
        </div>
        </>
    );
};

export default ProtectedAdmin;