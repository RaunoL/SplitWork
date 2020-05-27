import React from "react";
import TextInput from "../components/TextInput"
import ListOfSplits from "../components/ListOfSplits"
import NewSplitButton from "../components/NewSplitButton"
function Create() {
    return (
        <div>
            <label htmlFor="projName">Project Name</label>
            <TextInput id={"projName"} />
            <label htmlFor="dueDate">Due date</label>
            <input id={"dueDate"} />
            <ListOfSplits/>
            <TextInput id={"newSplitName"} />
            <TextInput id={"newSplitDue"} />
            <NewSplitButton/>
        </div>
    )
}
export default Create