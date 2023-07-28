import React from 'react';
import '../App.css'

function Sidebar(){
  return(
        <div className="rightcolumn">
          <h1>BIODATA
          <div id="myDIV"></div>
          </h1>
          
<table>
  <tr>
    <td>Nama Lengkap</td>
    <td>Lailyyatul Maslikhah</td>
  </tr>
  <tr>
    <td>Alamat</td>
    <td>Jl. Diponegoro Ds. Kaliploso Kec. Cluring Kab. Banyuwangi</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>lailyyatulmaslikhah@gmail.com</td>
  </tr>
  <tr>
    <td>No Handphone</td>
    <td>+62867577457877</td>
  </tr>
  <tr>
    <td>Skill</td>
    <td>Microsoft Office : <style></style>
     <progress id="file" value="98" max="100"> 72% </progress>
    </td>
    </tr>
    <tr>
    <td></td>
    <td>Desain  : <style></style>
     <progress id="file" value="90" max="100"> 72% </progress>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>Photography  : <style></style>
     <progress id="file" value="88" max="100"> 72% </progress>
    </td>
  </tr>
  
</table>
          </div>
  );
}
export default Sidebar