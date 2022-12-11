import createState from "./createStateStore";

interface Action{
    type:"changeName"|"getOlder",
    payload?:any

}

export const [UserStateProvider,useUserState]=createState({
    name:"salman",
    age:30
},
(state,action:Action)=>{
switch (action.type) {
    case "changeName":
        return {...state,name:action.payload}
        break;
        case "getOlder":
        return {...state,age:state.age+1}
        break;

    default:
        return state
        break;
}
}
)