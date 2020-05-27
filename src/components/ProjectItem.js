import React from "react"
function ProjectItem(props){
    const {name} = props
    const open = (name)=>{
        console.log(name)
    }
    return(
        <button className={"projectItem"} onClick={open(name)}>{name}</button>
    )
}