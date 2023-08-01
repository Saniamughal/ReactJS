import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReportSummary from "./ReportSummary";
import style from './style.css';
import jsonData from '../data.json';

const styleContainer={
    height:"380px",
    width:"270px",
  
}
const Summary=()=>{
    
    return (
        <div 
        className="container custom-font-text d-flex flex-column justify-content-center align-items-center"
        style={styleContainer} >
        <h6
        style={{
            fontWeight:"700",
            marginRight:"auto",
            marginLeft:"15px"
        }}>Summary</h6>
        <div style={{
            marginTop:"25px",

        }}>
      {jsonData.map((data)=>(
       
        <ReportSummary title={data.category} score={data.score} titleColor="var(--reaction-red)" backgroundColor="var(--light-red)" image={data.icon} />
          
      ))}
            {/* <ReportSummary title="Reaction" score="80" titleColor="var(--reaction-red)" backgroundColor="var(--light-red)" image={reaction} />
            <ReportSummary title="Reaction" score="80" titleColor="var(--reaction-red)" backgroundColor="var(--light-red)" image={reaction} />
            <ReportSummary title="Reaction" score="80" titleColor="var(--reaction-red)" backgroundColor="var(--light-red)" image={reaction} />
            <ReportSummary title="Reaction" score="80" titleColor="var(--reaction-red)" backgroundColor="var(--light-red)" image={reaction} /> */}
        </div>
        <button
        style={{
            width:"230px",
            height:"40px",
            borderRadius:"20px",
            backgroundColor:"var(--button-color)",
            color:"var(--text-color)",
            marginTop:"24px",
           
        }}
        >Continue</button>
      </div>
        
    );
}

export default Summary;