import createState from '@salman3001/react-state-manager/lib/createState';

interface Action {
  type: 'changeName' | 'getOlder';
  payload?: any;
}

export const [UserStateProvider, useUserState] = createState(
  {
    name: 'salman',
    age: 30,
  },
  (state, action: Action) => {
    switch (action.type) {
      case 'changeName':
        return { ...state, name: action.payload };
      case 'getOlder':
        return { ...state, age: state.age + 1 };

      default:
        return state;
    }
  }
);
