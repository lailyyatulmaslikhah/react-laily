//panggil component profile yang sudah kita buat difolder components
import Tepibar from "../components/Tepibar";
import Search from "../components/Search";
import Databuku from "../components/Databuku";
import React from 'react';




export default function Admin() {
    return (
        <>
         {/* <Search /> */}
        <Tepibar />
        <Databuku/>
        </>
    );
}
