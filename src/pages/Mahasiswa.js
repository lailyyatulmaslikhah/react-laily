//panggil component profile yang sudah kita buat difolder components
import AddMahasiswa from '../mahasiwas/AddMahasiswa';
import EditMahasiswa from '../mahasiwas/EditMahasiswa';
import React from 'react';


export default function Mahasiswa() {
    return (
        <>
        <AddMahasiswa />
        <EditMahasiswa />
        </>
    );
}