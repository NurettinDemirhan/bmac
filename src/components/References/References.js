
import erdemir from "./Erdemir.png"
import teknozone from "./images.jpeg"
import ketmak from "./ketmak.png"
import pacpro from "./pacpro.png"
import sertas from "./sertas.png"
import yon from "./yon.jpeg"




import "./References.css"

function References() {
    return (
      <div className="references">

        <h3>REFERANSLARIMIZ</h3>
        <div className="reference-container">
          <img className="reference-logo" src={erdemir}/>
          <img className="reference-logo" src={yon}/>
          <img className="reference-logo" src={ketmak}/>
          <img className="reference-logo" src={pacpro}/>
          <img className="reference-logo" src={sertas}/>
          <img className="reference-logo" src={teknozone}/>
        </div>
      </div>
    );
  }
  
  export default References;