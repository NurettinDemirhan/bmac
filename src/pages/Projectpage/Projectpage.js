
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";

import "./Projectpage.css"


function Projectpage() {
  return (
    <div className="projectpage">

      <Navbar/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default Projectpage;