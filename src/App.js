//import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';
import ProtectedAdmin from "./components/ProtectedAdmin";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
//import 'bootstrap/dist/css/boostrap.min.css';
//import 'bootstrap-icons/font/bosstrap-icons.css';
//import Sidebar from './components/Sidebar';
import Tepibar from "./components/Tepibar";
import Databuku from "./components/Databuku";
import Search from './components/Search'
import AddMahasiswa from './mahasiwas/AddMahasiswa';
import EditMahasiswa from './mahasiwas/EditMahasiswa';
import Akses from './components/Akses';
//import User from './components/User';


      // PAGES //
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Book from "./pages/Book";
import Mahasiswa from './pages/Mahasiswa';



          // CUDBOOK //
import AddBook from "./books/AddBook";
import EditBook from "./books/EditBook";


export default function MyApp(){
  return (
     <div>
    <BrowserRouter>
    <Header />
     <Navbar />
     <>
     <Routes>
     <Route exact path="/" element={<Home />} />
      <Route exact path="/daftar" element={<RegisterForm/>} />
      <Route exact path="login" element={<LoginForm />} /> 
      <Route exact path="login/dashboard" element={<Admin />} />
      {/* <Route exact path="login/mahasiswa" element={<AddMahasiswa />} /> */}
              {/* ROUTE KHUSUS KOMPONEN CUDBOOK */}
      {/* <Route path="login/admin" element={<AddBook />} /> */}
      <Route path="login/admin" element={<ProtectedAdmin />} />
      <Route exact path="login/mahasiswa" element={<AddMahasiswa />} />
      <Route exact path="Book" element={<Book />} />
      <Route exact path="/mahasiswa" element={<Mahasiswa />} />
      {/* <Route path="/dashboard" element={<Sidebar />} /> */}
      <Route exact path="databuku" element={<Databuku />} />
      <Route exact path="akses" element={<Akses />} />
      {/* <Route exact path="user" element={<User />} /> */}
      {/* <Route exact path="databuku" element={<Tepibar />} /> */}
   
    
    
     </Routes>
     </>
    </BrowserRouter>     
    </div>
  );
}


