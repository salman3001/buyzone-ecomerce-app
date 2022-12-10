import { useReducer } from "react"

interface State {
    cartCount: number
}
const state: State = {
    cartCount: 0
}

interface Action {
    type: "add" | "remove",
    payload?:any
}

const reducer = (state: State, action: Action): State => {

    switch (action.type) {
        case "add":
            return { ...state, cartCount: state.cartCount + 1 }
            break;
        case "remove":
            return { ...state, cartCount: state.cartCount - 1 }
            break;

        default:
            return state
            break;
    }
}

export default function useCartReducer() {
    const [cartState, cartDispatch] = useReducer(reducer, state)
    return {
        cartState,
        cartDispatch
    }
}

export const createCartContext={
    cartState:state,
    cartDispatch:(action:Action)=>{}
}

