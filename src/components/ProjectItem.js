import React from "react"
function ProjectItem(props){
    const {name} = props
    const open = (e)=>{
        console.log(e.target.innerText)
    }
    return(
        <button className={"projectItem"} onClick={open}>{name}</button>
    )
}
export default ProjectItem