import React, { useState } from "react";
import FocusHeader from "../components/FocusHeader"
import FocusSplit from "../components/FocusSplit"
import FocusWrapper from "../components/FocusWrapper"
import getProjectDetails from "../database/getProjectDetails"
function Focus(props) {
    const [projName, setProjName] = useState("loading")
    const [dueDate, setDueDate] = useState("loading")
    const [splits, setSplits] = useState([])
    getProjectDetails().then((result) => {
        setProjName(result.projName)
        setDueDate(result.dueDate)
        setSplits(result.splits)
    })
    const splitList = splits.map((split, index) =>
        <FocusSplit key={index} name={split.name} due={split.due} id={index} />
    )
    return (
        <FocusWrapper>
            <FocusHeader projName={projName} dueDate={dueDate} />
            <ul>
                {splitList}
            </ul>
        </FocusWrapper>
    )
}
export default Focus