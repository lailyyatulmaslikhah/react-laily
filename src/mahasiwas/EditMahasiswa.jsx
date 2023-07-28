import React, { useState } from "react";

const EditMahasiswa = ({ mahasiswa, updateMahasiswa }) => {
    const [editMahasiswa, setEditMahasiswa] = useState(mahasiswa);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditMahasiswa((prevMahasiswa) => ({
            ...prevMahasiswa,
            [name]: value,
        }));
    };

    const handleUpdateClick = () => {
        updateMahasiswa(mahasiswa._id, editMahasiswa);
    };

    return (
        <div>
            <center><h3>EDIT MAHASISWA</h3></center>
            <center><label className="typetext">
                <span>Nama :</span>
            <input 
           type="text"
            class="form_input"
           name="nama"
           value={editMahasiswa.nama}
           onChange={handleInputChange}
           />
            </label></center>
            
            <center><label className="typetext">
                <span>NIM : </span>
           
            <input 
           type="text"
            class="form_input"
           name="nim"
           value={editMahasiswa.nim}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Prodi :</span>
            <input 
           type="text"
            class="form_input"
           name="prodi"
           value={editMahasiswa.prodi}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Angkatan :</span>
           
            <input 
           type="text"
            class="form_input"
           name="angkatan"
           value={editMahasiswa.angkatan}
           onChange={handleInputChange}
           />
            </label></center>

            <center><label className="typetext">
                <span>Foto :</span>
            <input 
           type="text"
            class="form_input"
           name="foto"
           value={editMahasiswa.foto}
           onChange={handleInputChange}
           />
            </label></center>

            
          


            {/* <center><button onclick={handleUpdateClick}><input type="button" class="btn-update"></input>UPDATE</button></center> */}
            <center><button className="typesubmit" type="button" class="btn-update" onClick={handleUpdateClick}>UPDATE</button></center>
        </div>
        
    );
};

export default EditMahasiswa;