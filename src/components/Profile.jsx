import React from 'react';
import '../App.css'

const User = {
    nama: "Lailyyatul Maslikhah",
    imageUrl :("https://lh3.googleusercontent.com/pw/AMWts8BqXeoEYZMk-PLTB_5k6swiG7ad4ibzP0M3J4HlypxmcgMHRjlaxpGVao-JjspBoy1mAKLsWz5ksVByNMXsUhhrihU85kXYME6pIwihzcziEJO1aj5rq5ir7OlOuPH-LYoMp2VqV_Cf4sKD-kWlRq8Z=w477-h635-no")
}

function Profile(){
    return(
          <div className="row">
             <div className="leftcolumn">
             <div className="card">
            <img
            className="image"
            src={User.imageUrl}
            style={{width:"200px", height:"200px"}}
            alt="avatar"
            /> 
              <h3>{User.nama}</h3>    
             <p>Mahasiswa | 1122000546</p>
             <button>Contact Me</button>
             </div>
        </div>
        </div>
    );
} 
export default Profile