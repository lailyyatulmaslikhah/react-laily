 //membuat component Navbar dengan teknik expor named
//  export function Navbar(){
//     return (
//       <div className="topnav">
//         <h1><marquee>~CURRICULUM VITAE~</marquee></h1>   
//         {/* <h1>~CURRICULUM VITAE~</h1>   */}
//       </div>
//     );
//   }
import { Link } from "react-router-dom";
import React from 'react';


 //Membuat component Navbar dengan teknik export named
 export function Navbar() {
  return (
    <div className="topnav">
      <Link to="/" className="App-link">
        Home
      </Link>
        <Link to="akses" className="App-link">
        Product
      </Link>
      <Link to="/daftar" className="App-link">
      Register
      </Link>
      <Link to="login" className="App-link">
      Login
      </Link>
      <Link to="login/admin" className="App-link">
        Admin
      </Link>
      <Link to="login/dashboard" className="App-link">
        Bar Admin
      </Link>
      {/* <Link to="/mahasiswa" className="App-link">
        Mahasiswa
      </Link> */}
    </div>
  );
 };
