//import React dan model untuk 'fetch'
import React, { useState, useEffect } from "react";
import EditBook from "./EditBook";
import '../App.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
//import { FaSearch, FaSearchLocation } from "react-icons/fa";
//import 'bootstrap/dist/css/bootstrap.min.css'

//Buat komponen React dan Definisikan State untuk data yang akan kita ambil dari API 
const AddBook = () => {
    const [books, setBooks] = useState([]);
    const [jdlbuku, setJdlbuku] = useState("");
    const [ISBN, setIsbn] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [pengarang, setPengarang] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [editBook, setEditBook] = useState("");
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

    //Buat fungsi untuk menambah data baru melalui API dengan method 'POST'
    async function addBook() {
        const response = await fetch("http://localhost:5000/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ jdlbuku, ISBN, deskripsi, pengarang, penerbit}),
        });
        const data = await response.json();
        setBooks([...books, data]);
    }

    //Buat fungsi untuk Update data melalui API dengan method 'PUT'
    const updateBook = async (id, newBook) => {
        const response = await fetch(`http://localhost:5000/api/book/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook),
        });
        const data = await response.json();
        setBooks(books.map((book) => (book._id ===  id ? { ...data } : book)));
    };

    //Buat fungsi untuk menghapus data melalui API dengan method 'Delete'
    const deleteBook = async (id) => {
        await fetch(`http://localhost:5000/api/book/${id}`, {
            method: "DELETE",
        });
        setBooks(books.filter((book) => book._id !== id));
    };

    //Buat fungsi "handle" yang menangani suatu operasi sehinggaa menghasilkan aksi sesuai kebutuhan 
    const handleSubmit = (event) => {
        event.preventDefault();
        addBook();
        setJdlbuku("");
        setIsbn("");
        setDeskripsi("");
        setPengarang("");
        setPenerbit("");
    };

    const handleEditClick = (book) => {
        setEditBook(book);
    };

    const handleBatalEdit = (book) => {
        setEditBook();
    };

    //Tampilkan data diri dari API ke komponen JSX
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label><center>
                    Judul Buku : 
                    <input
                    type="text"
                    class="form_input"
                    value={jdlbuku} 
                    onChange={(event) => setJdlbuku(event.target.value)}
                    />
                </center></label>
                
                <label><center>
                ISBN : 
                <input
                type="text"
                class="form_input"
                value={ISBN}
                onChange={(event) => setIsbn(event.target.value)}
                />
                </center></label>

                <label><center>
                    Deskripsi :
                    <input 
                    type="text"
                    class="form_input"
                    value={deskripsi}
                    onChange={(event) => setDeskripsi(event.target.value)}
                    />
                </center></label>

                <label><center>
                    Pengarang:
                    <input
                    type="text"
                    class="form_input"
                    value={pengarang} 
                    onChange={(event) => setPengarang(event.target.value)}
                    />
               </center></label>

                <label><center>
                Penerbit: 
                <input
                type="text"
                class="form_input"
                value={penerbit}
                onChange={(event) => setPenerbit(event.target.value)}
                />
                </center></label>

                <center>
                <button type="submit"><input type="button" class="btn-add"></input></button></center>
            </form>
            <br />
            <h3><center>DATA BUKU</center></h3>
            <center><Form>
  <InputGroup className='my-5'>
            <Form.Control 
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Buku'
            />
            </InputGroup>
             </Form></center>
             <br></br>
            <table border="1">
                <thead>
                    <tr>
                     <th className="judul" width="10">No</th>
                        <th className="judul" width="120"><center>Judul Buku</center></th>
                        <th className="judul" width="80"><center>ISBN</center></th>
                        <th className="judul" width="150"><center>Deskripsi</center></th>
                        <th className="judul" width="150"><center>Penerbit</center></th>
                        <th className="judul" width="150"><center>Pengarang</center></th>
                        <th className="judul" colspan="50"><center>Aksi</center></th>
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
                          

                            <td><center>
                                <button onClick={() => handleEditClick(book)}><input type="button" class="btn-update"></input>UPDATE</button>
                         
                                <button onClick={() => deleteBook(book._id)}><input type="button" class="btn-delete"></input>DELETE</button>
                           
                                <button onClick={() => handleBatalEdit(books)}><input type="button" class="btn-cancel"></input>CANCEL</button>
                                </center></td>
                        </tr>
                    ))}
                </tbody>  
            </table>
            {/* Komponen Edit Book */}
            <div>
                {editBook && <EditBook book={editBook} updateBook={updateBook} />}
            </div>
        </div>
    );
};

export default AddBook;