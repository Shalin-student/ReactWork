import React from "react";
import Bird1 from "./Bird1";
import Bird2 from "./Bird2";
import Bird3 from "./Bird3";
import './Birds.css';

function Birds(){

    const bod1="Peacock";
    const bod2="Sparrow";
    const bod3="Eagle";

    return (
        <div style={{padding : '20px',fontFamily: 'Arial'}}>
            
                <h1 className="1" id="1"><Bird1 b1={bod1}/></h1>
                <h2 className="2" id="2"><Bird2 b2={bod2}/></h2>
                <h3 className="3" id="3"><Bird3 b3={bod3}/></h3>
               
        </div>
    );
}
export default Birds;