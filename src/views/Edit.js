import React from "react";
import TextInput from "../components/TextInput"
import ListOfSplits from "../components/ListOfSplits"
import NewSplitButton from "../components/NewSplitButton"
function Edit() {
    return (
        <div>
            <label htmlFor="projName">Project Name</label>
            <TextInput id={"projName"} />
            <label htmlFor="dueDate">Due date</label>
            <input id={"dueDate"} />
            <ListOfSplits/>
            <label htmlFor="newSplitName">What is this split called?</label>
            <TextInput id={"newSplitName"} />
            <label htmlFor="newSplitDue"> When is it due?</label>
            <TextInput id={"newSplitDue"} />
            <NewSplitButton/>
        </div>
    )
}
export default Edit