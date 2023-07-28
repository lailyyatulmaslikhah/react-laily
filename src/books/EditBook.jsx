import React, { useState } from "react";

const EditBook = ({ book, updateBook }) => {
    const [editBook, setEditBook] = useState(book);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleUpdateClick = () => {
        updateBook(book._id, editBook);
    };

    return (
        <div>
            <center><h3>EDIT BUKU</h3></center>
            <center><label className="typetext">
                <span>Judul Buku</span>
            <input 
           type="text"
            class="form_input"
           name="jdlbuku"
           value={editBook.jdlbuku}
           onChange={handleInputChange}
           />
            </label></center>
            
            <center><label className="typetext">
                <span>ISBN : </span>
           
            <input 
           type="text"
            class="form_input"
           name="ISBN"
           value={editBook.ISBN}
           onChange={handleInputChange}
           />
            </label></center>

            <ceter><label className="typetext">
                <span>Deskripsi :</span>
           
            <input 
           type="text"
            class="form_input"
           name="deskripsi"
           value={editBook.deskripsi}
           onChange={handleInputChange}
           />
            </label></ceter>

            <center><label className="typetext">
                <span>Pengarang :</span>
           
            <input 
           type="text"
            class="form_input"
           name="pengarang"
           value={editBook.pengarang}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Judul Buku</span>
           
            <input 
           type="text"
            class="form_input"
           name="penerbit"
           value={editBook.penerbit}
           onChange={handleInputChange}
           />
            </label></center>

            

          

 
             
            {/* <center><h3>EDIT BUKU</h3></center>
            <label><center>
                Judul Buku : 
                <input
                type="text"
                class="form_input"
                name="jdlbuku"
                value={editedBook.jdlbuku}
                onChange={handleInputChange}
                />
           </center></label>
            <label><center>
                ISBN : 
                <input 
                type="text"
                class="form_input"
                name="ISBN"
                value={editedBook.ISBN}
                onChange={handleInputChange}
                />
           </center></label>
            <label><center>
                Deskripsi : 
                <input
                type="text"
                class="form_input"
                name="deskripsi"
                value={editedBook.deskripsi}
                onChange={handleInputChange}
                />
            </center></label>

            <label><center>
                Pengarang : 
                <input 
                type="text"
                class="form_input"
                name="pengarang"
                value={editedBook.pengarang}
                onChange={handleInputChange}
                />
            </center></label>
            <label><center>
                Penerbit : 
                <input
                type="text"
                class="form_input"
                name="penerbit"
                value={editedBook.penerbit}
                onChange={handleInputChange}
                />
            </center></label> */}

            {/* <center><button onclick={handleUpdateClick}><input type="button" class="btn-update"></input>UPDATE</button></center> */}
            <center><button className="typesubmit" type="button" class="btn-update" onClick={handleUpdateClick}>Update</button></center>
        </div>
        
    );
};

export default EditBook;