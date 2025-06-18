import React,{Children, createContext,useReducer} from "react";
const initialState = {coont:0};
const countReducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default :
            return state;
    }
};
export const CountContext = createContext();
export const CountProvider = ({Children}) => {
    const [state,dispatch] = useReducer(countReducer,initialState);
    return ( <CountContext.Provider value={{state,dispatch}}>
        {Children}
    </CountContext.Provider>
    );
}
export default CountProvider;