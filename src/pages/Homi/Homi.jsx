import "./Homi.css"

import img1 from "../../assets/Slidebar/sb1.png"
import img2 from "../../assets/Slidebar/sb2.png"
import img3 from "../../assets/Slidebar/sb4.svg"
import img4 from "../../assets/Slidebar/sb5.png"
import img5 from "../../assets/Slidebar/sb6.png"

function Homi() {

  return (
    <>
    {/* <Navbar/> */}
    
    <div className="container">
      <div className="slider">

        <div className="slider-frame">
          
            <div className="img-container">
              <img className="slider-image" src={img1} alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img2} alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img3 }alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img4} alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img5} alt="" />
            </div>

            <div className="img-container">
              <img className="slider-image" src={img1} alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img2} alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img3 }alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img4} alt="" />
            </div>
            <div className="img-container">
              <img className="slider-image" src={img5} alt="" />
            </div>
          
        </div>

      </div>
    </div>
    </>

  );
}

export default Homi;