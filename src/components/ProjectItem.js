import React,{useState} from "react"
import changeActiveProject from "../database/changeActiveProject"
import { useHistory } from "react-router-dom";

import getUserProjects from "../database/getUserProjects"
function ProjectItem(props){
    const {name} = props
    let history = useHistory()
    const open = (e)=>{
        e.preventDefault()
        changeActiveProject(e.target.innerText).then(()=>{
            history.push("/focus")
        })
        
    }
    return(
        <button className={"projectItem"} onClick={open}>{name}</button>
    )
}
export default ProjectItem