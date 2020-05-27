import React from "react";
import FocusHeader from "../components/FocusHeader"
import FocusSplit from "../components/FocusSplit"
import FocusWrapper from "../components/FocusWrapper"
function Create(){
    return(
        <FocusWrapper>
            <FocusHeader projName={"Joe application"} dueDate={"30-05-2020"}/>
            <ul>
                <FocusSplit name={"introduction"} due={"28-05-2020"} id={1}/>
                <FocusSplit name={"introduction"} due={"28-05-2020"} id={2}/>
            </ul>
        </FocusWrapper>
    )
}
export default Create