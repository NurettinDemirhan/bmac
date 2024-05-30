import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import References from "../../components/References/References";
import Services from "../../components/Services/Services";
import "./Homepage.css"


function Homepage() {
  return (
    <div className="homepage">
      <Navbar/>
      <Header/>
      <Services/>
      <References/>
      <Footer/>

    </div>
  );
}

export default Homepage;
