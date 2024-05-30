import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";

import "./Aboutpage.css"


function Aboutpage() {
  return (
    <div className="aboutpage">

      <Navbar/>
      <AboutUs/>
      <Footer/>

    </div>
  );
}

export default Aboutpage;