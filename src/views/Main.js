import React from "react";
import ProjectItem from "../components/ProjectItem"
import AddButton from "../components/AddButton"
function Main() {
    return (
        <div>
            <ProjectItem name={"Joe application"}/>
            <AddButton />
        </div>

    )
}
export default Main