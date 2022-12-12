import createState from "./createStateStore"

interface Action {
    type: "add" | "remove"
}

export const [CartStateProvider, useCartStore] = createState(
    { count: 0 },
    (state, action: Action) => {
        switch (action.type) {
            case "add":
                return { ...state, count: state.count+1 }
                break;
            case "remove":
                return { ...state, count: state.count-1 }
                break;

            default:
                break;
        }
        return state
    })