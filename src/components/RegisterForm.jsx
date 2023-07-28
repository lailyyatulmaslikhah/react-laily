import React, { useState } from "react";
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSucces, setRegistrationSucces] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const userData = { username, password };
    try {
      const response = await fetch("http://localhost:5000/api/user/daftar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log("Data Pendaftaran:", data);
      if (response.ok) {
        console.log("Pendaftaran Berhasil");
        setRegistrationSucces(true);
        setUsername("");
        setPassword("");
      } else {
        console.log("Pendaftaran Gagal");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    

        <form onSubmit={handleSubmit}>
          {registrationSucces && <p>Pendaftaran Berhasil !!</p>}
          {/* <div className="login-block"> */}
          <div class="kotak_login">
            <h1 class="tulisan_login">Register</h1>

          
            {/* <label>Username : </label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br></br> */}
              <center><label className="typetext">
                <span>Username :</span>
            <input 
           type="text"
            class="form_input"
            placeholder="Username atau email"
           value={username}
           onChange={(event) => setUsername(event.target.value)}
           />
               </label></center>
<br></br>
<center><label className="typetext">
                <span>Password :</span>
            <input 
           type="text"
            class="form_input"
            placeholder="Password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
           />
           </label></center>
            {/* </label></center>
            <label>Password : </label>
            <input
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br></br> */}
           <br></br>
             <center><button type="submit" class="tombol_login">Daftar</button></center>
           
          </div>
        </form>
    //  </div>
    // </div>
  );
}

function Daftar() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default Daftar;