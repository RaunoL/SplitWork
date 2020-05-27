import React from "react"
function FocusSplit(props){
    const {name} = props
    const {due} = props
    const {id} = props
    return(
        <div id={"split"+id} className={"split"}>
            <li><span>{name}</span> Is due in <span>{due}</span></li>
        </div>
    )
}
export default FocusSplit