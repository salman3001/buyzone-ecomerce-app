import createState from '@salman3001/react-state-manager/lib/createState';

interface Action {
	type: 'add' | 'remove'|"sas";
}



export const [CartStateProvider, useCartStore] = createState({ count: 0 }, (state, action: Action) => {
	switch (action.type) {
		case 'add':
			return { ...state, count: state.count + 1 };
		case 'remove':
			return { ...state, count: state.count - 1 };
		default:
			break;
	}
	return state;
});
