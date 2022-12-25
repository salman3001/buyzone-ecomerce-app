import createState from '@salman3001/react-state-manager/lib/createState';

interface Action {
	type: 'add' | 'remove';
	payload:number
}

export const [CartStateProvider, useCartState] = createState<{items:number[]},Action>({ items: [] }, (state, action: Action) => {
	switch (action.type) {
		case 'add':
			let newState={...state,items:[...state.items,action.payload]}
			return newState;
		case 'remove':
			let newValues:number[]=[]
			for (const value of state.items) {
				if (value!==action.payload) {
				newValues.push(value)
				}
			}
	     return { items:newValues }
		default:
			break;
	}
	return state;
});
