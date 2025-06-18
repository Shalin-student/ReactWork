import React,{useState} from "react";
import './App.css';
const Appp = () => 
{
    const [input , setInput] = useState("");
    const handleClick = (value) => {
        setInput(input + value);
    };
    const handEqual = () => {
        try{
            setInput(eval(input));
        }
        catch(error){
            setInput("Error Granted!");
        }
    };
    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                <button onClick={() => setInput("")}>C</button>
                <button onClick={() =>handleClick("+")}>+</button>
                <button onClick={() =>handleClick("-")}>-</button>
                <button onClick={() =>handleClick("*")}>*</button>
                <button onClick={() =>handleClick("/")}>/</button>
                <button onClick={handEqual}>=</button>
                <button onClick={() =>handleClick("9")}>9</button>
                <button onClick={() =>handleClick("8")}>8</button>
                <button onClick={() =>handleClick("7")}>7</button>
                <button onClick={() =>handleClick("6")}>6</button>
                <button onClick={() =>handleClick("5")}>5</button>
                <button onClick={() =>handleClick("4")}>4</button>
                <button onClick={() =>handleClick("3")}>3</button>
                <button onClick={() =>handleClick("2")}>2</button>
                <button onClick={() =>handleClick("1")}>1</button>
                <button onClick={() =>handleClick(".")}>.</button>
            </div>    
        </div>
    );
}; 
export default Appp;