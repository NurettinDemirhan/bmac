import logo from "../Navbar/logo-white.png";
import "./Footer.css"

function Footer() {
    return (
      <div className="footer">

        <div className="footer-contact-container">
          <h3>İLETİŞİM</h3>
          <p>E-Posta: hd.bmac@gmail.com</p>
          <p>Tel: 0530 931 4664 </p>
          <p>Bağlık Mh. Erdemir Cd. No: 233/23 Kdz.Ereğli / Zonguldak</p>
        </div>

        <div className="footer-headers-container">
          <h3>KURUMSAL</h3>
          <p>Ana Sayfa</p>
          <p>Hakkımızda</p>
          <p>Hizmetlerimiz</p>
          <p>İletişim</p>
        </div>

        <div className="footer-services-container">
          <h3>HİZMETLERİMİZ</h3>
          <p>Borulama</p>
          <p>Çelik Yapılar</p>
          <p>Köprü İmalatı</p>
          <p>Tank-Kazan İmalatı</p>
          <p>Endüstriyel Hizmet</p>
        </div>

        <div className="footer-info-container">
          <h3>BMAC İmalat Montaj Sanayi ve Ticaret LTD. ŞTİ</h3>
          <img src={logo}/>
        </div>

      </div>
    );
  }
  
  export default Footer;