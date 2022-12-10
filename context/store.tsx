import { type } from "os";
import { useReducer, useContext,createContext, ReactNode, Dispatch } from "react";

interface IinitialState{
    name:string
}
const initialState:IinitialState={name:"sallu"}



interface Iaction{
    type:""
    payload:any

}
const action:Iaction={
    type:"",
    payload:432
}

function reducer(
    state:IinitialState,
    action:Iaction):IinitialState{
    switch (action.type) {
        case "":
            return state
            break;
    
        default:
            return state
            break;
    }
    }


const store = createContext<{state:IinitialState,dispatch:Dispatch<Iaction>}>({state:initialState,dispatch:(action)=>void})

const StoreProvide =({children}:{children:ReactNode})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    let value = {state:state,dispatch:dispatch}

    return(
        <store.Provider value={value}>
          {children}
        </store.Provider>
    )
}

function useStore(){
    const [state,dispatch]=useContext(store)
    return[
        state,dispatch
    ]
}

const [st,ds]=useStore()

