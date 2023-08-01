import React from "react";
import ReactDOM  from "react-dom";
import style from './style.css';
const ReportSummary = (props) =>{
const { titleColor } = props;
const { backgroundColor } = props;
    return (
        <div style={{
            //marginLeft:"25px",
            padding:"0",
            width:"230px",
            height:"40px",
            backgroundColor,
            borderRadius:"10px",
            marginBottom:"12px"}}
            className="custom-font-text container d-flex align-items-center">
             <img style={{margin:"10px"}}
                 src={props.image}
                 alt="reaction" />
              <h6 style={{color:{titleColor}, fontWeight:"600"}}>{props.title}</h6>
              <h6 style={{marginLeft:"auto", marginRight:"4px"}}>{props.score}</h6>
              <h6 style={{marginRight:"6px", color:"var(--total-marks)", fontWeight:"500"}}> / 100</h6>
        </div>
       
    );

}

export default ReportSummary;
