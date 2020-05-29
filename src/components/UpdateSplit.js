import React, {useState} from "react"
import updateSplitInfo from "../database/updateSplitInfo"
function UpdateSplit(props){
    const {splitId} = props
    const {name}= props
    const {due} = props
    const [nameState, setNameState] = useState(name)
    const [dueState, setDueState] = useState(due)
    const saveChanges = (e)=>{
        e.preventDefault()
        console.log("saved", e)
        updateSplitInfo("math3","2020-05-29","split0",true)
    }
    return(
        <form onSubmit={saveChanges}>
            <input type="text" value={nameState} onChange={(e)=> setNameState(e.target.value)}/>
            <input type="date" value={dueState} onChange={(e)=> setDueState(e.target.value)}/>
            <label htmlFor="complete">Mark as complete</label>
            <input type={"checkbox"} id={"complete"}/>
            <button type={"submit"}>Save</button>
        </form>
    )

}
export default UpdateSplit