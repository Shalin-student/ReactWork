import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props){
    return <h1>I am a { props.brand }!</h1>;
}
function App1(){
    const myElement = <Car brand = "BMW m4" />;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
}
export default App1;