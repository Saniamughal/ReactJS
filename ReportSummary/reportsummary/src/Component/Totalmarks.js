import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './Color.css';

const styleContainer={
    backgroundColor:"var(--primary-color)",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:"270px",
    borderRadius:"30px",
    color:"var(--text-color)",
    fontFamily:"Hanken Grotesk , sans-serif"
    
}
const circleContainer={
    backgroundColor:"var(--circle-color)",
    width:"150px",
    height:"150px",
    borderRadius:"50%",
    textAlign:"center",
    display:"flex",
    flexDirection:"Column",
    justifyContent:"center",
    alignItems:"center",
    
}
const Totalmarks=()=>{
return(
  <div className='container d-flex custom-font-text' style={styleContainer}>
  <h6 className="mt-4" style={{color:"var(--text-low-opacity)"}}>Your Result</h6>
    <div className="mt-4" style={circleContainer}>
       <h1  className="mt-4 mb-0" style={{fontWeight:"900" , fontSize:"50px"}}>76</h1>
       <p style={{color:"var(--text-low-opacity)"}} className="mt-0" >of 100</p>
    </div>
    <div style={{padding:"10px"}}>
    <h5 className="d-flex justify-content-center align-items-center mt-3 mb-0" style={{fontWeight:"800"}}>Great</h5>
    <h6  style={{textAlign: "center", fontSize:"14px",padding:"17px",color:"var(--text-low-opacity)"}}>You scored higher than 6.5% of  the people. who have take these text.</h6>
    </div>
  </div>
);
}
export default Totalmarks;