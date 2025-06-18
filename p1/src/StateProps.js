import React, {useState} from "react";
const Welcome = (props) =>{
    return <h1>Hello, {props.name}!</h1>;
};
const App4 = () =>{
    const [user, setUser]=useState("Justin");

    return(
        <div>
            <Welcome name = {user}/> {/*Passing State as Props*/}
            <button style={{width :'70px' , height: '50px', display:"inline"}} onClick={() => setUser("Haily")}>Change Button</button>
        </div>
    );
};
export default App4;