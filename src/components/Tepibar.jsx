import React, {useState, useEffect} from 'react';
import '../App.css'
import ProtectedAdmin from "../components/ProtectedAdmin";
import AddBook from "../books/AddBook";
import { useNavigate } from "react-router-dom";

import {
    FaBook,
    FaTh, 
    FaUser,
     FaUserAlt,
     FaUserTag,
      FaBars,
      FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Tepibar = ({children}) => {
    // const [isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);
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

    
    const menuItem=[
        {
            path:"/admin",
            name:"Dashboard",
            icon:<FaTh/>
        },

        {
            path:"/",
            name:"Profile Admin",
            icon:<FaUserAlt/>
        },

        {
            path:"/login/admin",
            name:"Data Buku",
            icon:<FaBook/>
        },

        {
            path:"/login/mahasiswa",
            name:"Data Mahasiswa",
            icon:<FaUser/>
        },

        // {
        //     path:"/user",
        //     name:"Data User",
        //     icon:<FaUserTag/>
        // },
        
    ]
    
    return(
        <div className="tepibar">
            <div className="top-section">
                <div className="bars">
                    <FaBars/>
            </div>

            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon ">{item.icon}</div>
                        <div className="link-text">{item.name}</div>
                    </NavLink>
                ))
            }
 
        </div>
        <main>{children}</main>
        <button onClick={handleLogout}><FaSignOutAlt/> LOGOUT</button>
   
    </div>
    )
};

export default Tepibar;