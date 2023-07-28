import '../App.css'
import Databuku from './Databuku';
import Akses from './Akses';
import CudBook from "../books/AddBook";
import React, { useState }from "react";
import EditBook from '../books/EditBook';



function Search() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [jdlbuku, setJdlbuku] = useState("");
    const [ISBN, setIsbn] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [editedBook, setEditedBook] = useState("");

    // console.log(books.filter(book=>book.jdlbuku.includes("fe")))
    const Search = (data)=>{
        return data.filter(book=>book.jdlbuku.toLowerCase().includes(query))
    }
    return (
        <div className="search">
            <input type="text" placeholder='Search....' className='search' onChange={e=> setQuery(e.target.value)} />
            <ul className='list'>
                {books.filter(book=>book.jdlbuku.toLowerCase() .includes(query)).map((book) => (
                    <li key={book.jdlbuku} className='listItem'>{books.jdlbuku}</li>
                ))}
            </ul>
            <Databuku/>
            <Akses/>
            <CudBook/>
        </div>
    )
}
export default Search