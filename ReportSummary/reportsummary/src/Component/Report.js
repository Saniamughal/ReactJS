import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Totalmarks from './Totalmarks';
import Summary from './Summary';



const bodyStyle={
  padding:"10%",
 justifyContent:"center",
 alignItem:"center",
 backgroundColor:"white"

}
const container={
  backgroundColor:"var(--border-style)",
  borderRadius:"24px"
}


const Report = () => {
  return (
    <div className="container d-flex" style={bodyStyle}>
    <div className='d-flex' style={
      {
    backgroundColor:"var(--text-color)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", 
    borderRadius:" 30px",
   }
    }>
    <div>
     <Totalmarks/>
    </div>
    <div>
    <Summary/>
    </div>
    </div>
    </div>
   
     
  );

};

export default Report;