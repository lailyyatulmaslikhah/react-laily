import '../App.css' //import file App.css untuk style
import logoStikom from "../maskot stikom.png"
import React from 'react';



const Logo ={
    nama: "Maskot Stikom",
    imageUrl: "",
    imageSize: 85,
}
// function Header(){
//     return(
//       <div className="header">
//         <h1>Header Component</h1>
//       </div>
//     );
//   }

  function Header(){
    return(
      <div className="flex-container">
        <div className="header-logo">
            <img 
                className="App-logo"
                src={logoStikom}
                alt={"Logo" + Logo.nama}
                style={{ width:Logo.imageSize, height:Logo.imageSize }}
            />
            <h3>{Logo.nama}</h3>
        </div>
        <div className="header-tengah">
            <h1>STIKOM PGRI BANYUWANGI</h1>
            <h2>Jalan Jend. A. Yani No.80B Banyuwangi</h2>
        </div>
      </div>
    );
  }
  export default Header