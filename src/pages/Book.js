//panggil component profile yang sudah kita buat difolder components
import AddBook from "../books/AddBook";
import EditBook from "../books/EditBook";
import React from 'react';


export default function Book() {
    return (
        <>
        <AddBook />
        <EditBook />
        </>
    );
}