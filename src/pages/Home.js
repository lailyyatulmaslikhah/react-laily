//panggil component profile yang sudah kita buat difolder components
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import React from 'react';


export default function Home() {
    return (
        <>
        <Profile />
        <Sidebar />
        </>
    );
}