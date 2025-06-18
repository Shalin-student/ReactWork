import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
import Appp from './Calculator';
import App1 from './PropsEx';
import App3 from './App2';
import Message from './Message';
import Bird1 from './Bird1';
import Bird2 from './Bird2';
import Bird3 from './Bird3';
import Birds from './Bird';
import './Birds.css';
import App4 from './StateProps';
import A from './hookex';
import CountProvider from './hook';
import TP from './Effect';
import N from './ValidatonForm';
import SetAllCards from './A';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <App1/> */}
    {/* <Message/> */}
    {/* <App3/> */}
    {/* <Birds/> */}
    <Appp/>
    {/* <App4/> */}
    {/* <A/> */}
    {/* <TP/> */}
    {/* <N/> */}
    {/* <SetAllCards/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
