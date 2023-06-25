import React from "react";
import myImage from "./image-qr-code.png"


const containerStyle={
   backgroundColor:"hsl(212, 45%, 89%)",
   position: "fixed",
   top: "0",
   bottom: "0",
   left: "0",
   right: "0",
   overflow: "auto"

}
const cardStyle={
    width:"18rem",
    borderRadius:" 1.5rem"
}

const ScanQR=()=>{
    return(
       <div className="container d-flex align-items-center justify-content-center" style={containerStyle}>
       <div className="card " style={cardStyle}>
       <div className="card-body text-center">
     <img src={myImage} alt="QRCode" className="img-fluid rounded mb-4" style={{maxWidth:'100%', height:'auto'}} />
     
     <h2 className="card-title mb-3" style={{fontFamily: 'Outfit',fontSize:'22px',fontWeight: '700',color:'hsl(218, 44%, 22%)'}}>Improve your front-end skills by building projects</h2>
     <p className="card-text" style={{fontFamily: 'Outfit',fontSize:'15px',fontWeight: '400',color:'hsl(220, 15%, 55%)'}}>Some your QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </div>
      </div>
       </div>
    );
}
export default ScanQR