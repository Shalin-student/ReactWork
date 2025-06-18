import React from "react";
// Child Components
function Message(props){
    return (
        <div style={{marginTop: '20px', padding:'10px' , border: '1px solid gray'}}>
            <h2>Child Components</h2>
            <p>{props.text}</p>
        </div>
    );
}
export default Message;