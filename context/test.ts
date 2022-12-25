import createState from "@salman3001/react-state-manager/lib/createState";

interface Action{
    type:"do"
}
interface State{
    name:string
}
export const [testStaterovider,useTestState]=createState<State,Action>({name:"salman"},(state,action)=>{
  switch (action.type) {
      case "do": 
          return {...state,name:"rinku"}
      default:
         return state
  }
})