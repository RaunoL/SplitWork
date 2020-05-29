import React, { useState } from "react";
import TextInput from "../components/TextInput"
import NewSplitButton from "../components/NewSplitButton"
import Button from "../components/Button"
import newProject from "../database/newProject"
import FocusSplit from "../components/FocusSplit"
function Create() {
    const [splitList, setSplitList] = useState([])
    const [counter, setCounter] = useState(0)
    const [current, setCurrent] = useState({ name: "", due: "" , status : false, id: 0})

    const createProject = (e) => {
        e.preventDefault();
        const projectName = document.getElementById("projName").value;
        const dueDate = document.getElementById("dueDate").value;
        newProject(projectName, dueDate, splitList)
    }
    const listItems = splitList.map((item, index) =>
        <FocusSplit key={index} name={item.name} due={item.due} id={"split"+index} />
    )
    const addToList = (e) => {
        setCounter(counter+1)
        setSplitList(splitList.concat(current));
        console.log(counter)
        console.log(current)
    }
    return (
        <div>
            <label htmlFor="projName">Project Name</label>
            <TextInput id={"projName"} />
            <label htmlFor="dueDate">Due date</label>
            <input type="date" id={"dueDate"} />
            <ul id={"splitList"}>
                {listItems}
            </ul>
            <input type="text" placeholder="Name" id="name" value={current.name} onChange={(e) => setCurrent({ ...current, name: e.target.value, id: "split"+counter  })} />
            <input type="date" id="due" value={current.due} onChange={(e) => setCurrent({ ...current, due: e.target.value, id: "split"+counter })} />
            <NewSplitButton action={addToList} />
            <Button id={"create"} action={createProject} text={"Create"} />
        </div>
    )
}
export default Create