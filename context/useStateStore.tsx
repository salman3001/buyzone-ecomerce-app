import { useContext, createContext, ReactNode } from "react";
import useCartReducer,{createCartContext} from "./useCartReducer";


//initalizing context with all imported contexts

const StateStore = createContext({
    ...createCartContext
})

//creating store provider with reducerhook

export const StateStoreProvide = ({ children }: { children: ReactNode }) => {
    const {cartState,cartDispatch} =useCartReducer()


    return (
        <StateStore.Provider value={{
            cartState,
            cartDispatch
        }}>
            {children}
        </StateStore.Provider>
    )
}

//Creating useStoreHook 

export default function useStore() {
    const store = useContext(StateStore)
    return store
}







