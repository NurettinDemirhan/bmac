import bmacheaderOne from "./bmac-header-photo.jpg"
import bmacheaderTwo from "./bmac-header-photo-two.jpg"
import bmacheaderLogo from "../Navbar/bmac-logo-black.jpeg"
import "./Header.css"

function Header() {
    return (
      <div className="header">
        
        <div className="header-img-container">
          <img className="header-img" src={bmacheaderOne}/>
          <img className="header-img" src={bmacheaderTwo}/>
        </div>
        <div className="header-text">

        
            <div className="header-text-container">
                <h2>BMAC Çelik Konstrüksiyon</h2>
                <p>BMAC Çelik Konstrüksiyon'a hoş geldiniz – BMAC; yapısal 
                    çelik konstrüksiyon, fabrika ve sanayi yapıları ile
                    anahtar teslim inşaat projelerinde ulusal ve 
                    uluslararası alanda hizmet sunmaktadır. Deneyimli 
                    ve yüksek nitelikli proje ekibi, en son teknolojik 
                    CNC üretim hatlarıyla donatılmış modern üretim tesisleri ve 
                    yüksek kalite standartları ile BMAC, Türkiye'nin önde gelen 
                    çelik konstrüksiyon firmalarından biridir.</p>
                    
            </div>
            <img className="header-logo" src={bmacheaderLogo}/>
        </div>

      </div>
    );
  }
  
  export default Header;