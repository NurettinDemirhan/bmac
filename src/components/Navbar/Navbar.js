import bmacLogo from "./logo-white.png"
import "./Navbar.css"
function Navbar() {
    return (
      <div className="navbar">
          <img className="navbar-logo" src={bmacLogo}/>
        <div className="navbar-categories">
            <a href="/">Ana Sayfa</a>
            <a href="/about">Hakkımızda</a>
            <a href="/projects">Projelerimiz</a>
            <a href="/">İletişim</a>
        </div>
      </div>
    );
  }
  
  export default Navbar;