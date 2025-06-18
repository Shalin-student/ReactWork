import React from "react";
// Parent Components
import Message from "./Message";

function App3(){
    const message ="Hello From Parent Components!";

    return (
        <div style={{padding : '20px',fontFamily: 'Arial'}}>
            <h1>Parent Component</h1>
            <Message text = {message} />
        </div>
    );
}
export default App3;