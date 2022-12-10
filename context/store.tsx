import { type } from "os";
import { useReducer, useContext, createContext, ReactNode, Dispatch } from "react";


//Defining initial state

interface InitialState {
    cart: {
        cartItems: string[],
    }
}
const initialState: InitialState = {
    cart: {
        cartItems: ["ss"],

    }
}


//Defining actions 
interface Action {
    type: "ADD ITEM"
    payload?: any


}
const action: Action = {
    type: "ADD ITEM",
    payload : null

}

// defining useReducer funtion

function reducer(
    state: InitialState,
    action: Action): InitialState {
    switch (action.type) {
        case "ADD ITEM":
            let newCartItems=[...state.cart.cartItems]
            newCartItems.push("salman")
            
 
            return {...state,cart:{cartItems:[...newCartItems]}}
            break;

        default:
            return state
            break;
    }
}

//initalizing context

const store = createContext<{ state: InitialState, dispatch: Dispatch<Action> }>({ state: initialState, dispatch: (action: Action) => null })

//creating store provider

export const StoreProvide = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <store.Provider value={{ state, dispatch }}>
            {children}
        </store.Provider>
    )
}

//Creating useStoreHook

export function useStore() {
    const { dispatch, state } = useContext(store)
    return { state, dispatch }
}







