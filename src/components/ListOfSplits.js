import React from "react"
import FocusSplit from "./FocusSplit"
function ListOfSplits(props){
    const {splits} = props
    return(
        <ul>
            <FocusSplit name={"Introduction"} id={1} due={"20-05-2020"}/>
            <FocusSplit name={"Main"} id={1} due={"20-05-2020"}/>
        </ul>
    )
}
export default ListOfSplits