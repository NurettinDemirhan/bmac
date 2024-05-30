
import "./Services.css"
import cardPhoto from "../Header/bmac-header-photo.jpg"
function Services() {
    return (
      <div className="services">

        <h2>Hizmetlerimiz</h2>

        <div className="services-container">

            <div className="services-container-card">
                <img className="card-photo" src="https://www.rhinotank.com.tr/wp-content/uploads/2023/05/process-pipe1__large-1024x683.jpg"/>
                <h3 className="card-text">Borulama</h3>
            </div>

            <div className="services-container-card">
                <img className="card-photo" src="https://sunwardsteel.com/wp-content/uploads/2022/05/commercial-building-framing.jpg"/>
                <h3 className="card-text">Çelik Yapılar</h3>
            </div>

            <div className="services-container-card">
                
                <img className="card-photo" src="https://resource.midasuser.com/hubfs/EN_MIDAS%20BRIDGE/03.%20Solutions%20(%EC%82%AC%EC%97%85%ED%8C%80%EC%A0%91%EA%B7%BCX)/03.%20Steel%20Bridges/Figure/4.jpg"/>
                <h3 className="card-text">Köprü İmalatı</h3>
            </div>

            <div className="services-container-card">
                
                <img className="card-photo" src="https://www.tukenmezmakine.com/wp-content/uploads/2023/06/tank-ve-kazan-imalati.jpeg"/>
                <h3 className="card-text">Tank-Kazan İmalatı</h3>
            </div>

            <div className="services-container-card">
                
                <img className="card-photo" src="https://izgen.com.tr/images/services/1685314957188-586-hizmet%20END%C3%9CSTR%C4%B0YEL%20OTOMASYON.jpg"/>
                <h3 className="card-text">Endüstriyel Hizmet</h3>
            </div>

        </div>

      </div>
    );
  }
  
  export default Services;