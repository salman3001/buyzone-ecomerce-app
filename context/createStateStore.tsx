import { createContext, ReactNode, useContext, useReducer, useState } from "react"



export default function createState<I,A>(initialState: I, reducerFn: (state: I, action: A) => I): [({ children }: {
    children: ReactNode;
}) => JSX.Element, () => [I, (action: A) => void]] {

    const state = initialState

    const Store = createContext({ state, dispatch: (action: A) => { } })

    const StoreProvider = ({ children }: { children: ReactNode }) => {
        const [state, dispatch] = useReducer(reducerFn, initialState)
        return (
            <Store.Provider value={{ state, dispatch }}>
                {children}
            </Store.Provider>
        )
    }

    const useStore = ():[I,(action: A) => void] => {
        const {state,dispatch} = useContext(Store)
        return [state,dispatch]
    }



    return [StoreProvider, useStore]
}





