import { useTestState } from "../context/test";
export default function Test() {
    const [state, action] = useTestState()
    return (
        <div>
            <button onClick={() => action({ type: "do" })}>click</button>
            <br />
            {state.name}
        </div>
    )
}