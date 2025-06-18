import ReactDOM from 'react-dom/client';
import React,{useState,useEffect,useRef,useContext,useMemo} from "react";
import { CountProvider,CountContext } from "./hook";
const Counter = () => {
    const {state,dispatch}=useContext(CountContext);
    const [localCount,setLocalCount] = useState(0);
    const [name,setName] = useState('React User');

    useEffect(() => {
        document.title='Count: ${state.count}';
    },[state.count]);
    
    useEffect(() => {
        useRef.current=state.count;
    },[state.count]);

    const incrementLocalCount = () => setLocalCount(localCount+1);
    const decrementLocalCount = () => setLocalCount(localCount-1);

    const MulValue = useMemo (() => state.count*2,[state.count]);

    return (
        <div>
            <h1>Hello,{name}!</h1>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            />

            <h2>{state.count}</h2>

            <h2>double: {MulValue} </h2>
            <button onClick={incrementLocalCount}>I</button>
            <button onClick={decrementLocalCount}>D</button>
        </div>
    );
};
const A =() => {
    <CountProvider>
        <Counter/>
    </CountProvider>
} ;
export default A;