import './App.css';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
function Timer(){
    const[count,setCount]=useState(0);
    useEffect(() => {
        setTimeout ( () => {
            setCount((count) => count +1);
        },1000);
    });
    return <h1>I have rendered {count} times!</h1>;
}
const TP = () => {
    const root= ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Timer/>);
}
export default TP;
