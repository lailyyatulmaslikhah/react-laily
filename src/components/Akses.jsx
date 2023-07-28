// import React from 'react';
import React, { useState, useEffect } from "react";
import EditBook from '../books/EditBook';
import '../App.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FaSearch, FaSearchLocation } from "react-icons/fa";

  const Akses = () => {
    const [books, setBooks] = useState([]);
    const [jdlbuku, setJdlbuku] = useState("");
    const [ISBN, setIsbn] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [editedBook, setEditedBook] = useState("");
    const [search, setSearch] = useState("");

    //Panggil fungsi 'fetchBooks' menggunakan 'useEffect untuk ambil data saat komponen dimuat
    useEffect(() => {
        fetchBooks();
    }, []);
    
    //Buat fungsi 'fetchBooks' untuk mengambil data dari API dan perbaharui state 
    const fetchBooks = async () => {
        const response = await fetch("http://localhost:5000/api/book");
        const data = await response.json();
        setBooks(data);
    };

  return(
    
        <div className="akses-data">
          <h1><center>DATA BUKU</center></h1>
         <center><Form>
  <InputGroup 
            class='my-5'>
            <Form.Control 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Buku'
            />
            </InputGroup>
             </Form></center>
             <div class="box">
          <center><div class="container-1">
         </div></center>
         <br></br>
            <table border="1">
                <thead>
                    <tr>
                    <th className="judul" width="10">No</th>
                        <th className="judul" width="50"><center>Judul Buku</center></th>
                        <th className="judul" width="10"><center>ISBN</center></th>
                        <th className="judul" width="100"><center>Deskripsi</center></th>
                        <th className="judul" width="50"><center>Pengarang</center></th>
                        <th className="judul" width="50"><center>Penerbit</center></th>
                    </tr>
                </thead>
                <tbody>
                {books.filter((book) => {
                        return search.toLowerCase() === '' ? book : book.jdlbuku.
                        toLowerCase().includes(search)
                    }).map((book, index) =>(
                        <tr key={book._id}>
                             <td>{index + 1}</td>
                            <td>{book.jdlbuku}</td>
                            <td>{book.ISBN}</td>
                            <td>{book.deskripsi}</td>
                            <td>{book.pengarang}</td>
                            <td>{book.penerbit}</td>
                            </tr>
                    ))}
                </tbody>  
            </table>
   

            {/* Komponen Edit Book */}
            <div>
            </div>
            {/* {editBook && <EditBook book={editBook} updateBook={updateBook} />} */}
            </div>
            </div>
  );
}


export default Akses;