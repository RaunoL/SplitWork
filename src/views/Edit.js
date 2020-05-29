import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput"
import NewSplitButton from "../components/NewSplitButton"
import getProjectDetails from "../database/getProjectDetails"
function Edit() {
    const [projName, setProjName] = useState("loading")
    const [dueDate, setDueDate] = useState("2020-05-20")
    const [splits, setSplits] = useState([])
    useEffect(() => {
        getProjectDetails().then((result) => {
            setProjName(result.projName)
            setDueDate(result.dueDate)
            setSplits(result.splits)
        })
    }, [])
    const changeInput = (e) => {
        console.log(splits)
    }
    let listOfSplits = splits.map((split, index) =>
        <div key={"split" + index}>
            <input type={"text"} value={split.name} id={index} className={"splitName"} onChange={(e) => setSplits({ ...splits, name: e.target.value })} />
            <input type={"date"} value={split.due} id={"splitDue" + index} className={"splitDue"} />
        </div>
    )
    return (
        <div>
            <label htmlFor="projName">Project Name</label>
            <input onChange={(e) => setProjName(e.target.value)} type="text" value={projName} id={"projName"} className={"textInput"} />
            <label htmlFor="dueDate">Due date</label>
            <input type={"date"} id={"dueDate"} value={dueDate}  />
            {listOfSplits}
            <label htmlFor="newSplitName">What is this split called?</label>
            <label htmlFor="newSplitDue"> When is it due?</label>
            <NewSplitButton />
        </div>
    )
}
export default Edit