import React, { useState } from "react";
import FocusHeader from "../components/FocusHeader"
import FocusSplit from "../components/FocusSplit"
import FocusWrapper from "../components/FocusWrapper"
import getProjectDetails from "../database/getProjectDetails"
import UpdateSplit from "../components/UpdateSplit"
function Focus(props) {
    const [projName, setProjName] = useState("loading")
    const [dueDate, setDueDate] = useState("loading")
    const [splits, setSplits] = useState([])
    const [editSplit, setEditSplit] = useState()
    const [currentRender, setCurrentRender] = useState()
    getProjectDetails().then((result) => {
        // setProjName(result[0].projName)
        // setDueDate(result[0].dueDate)
        setSplits(result)
    })

    // const splitList = splits.map((split, index) =>
    //     // <FocusSplit status={split.status} editSplit={editSplit} setEditSplit={setEditSplit} key={index} name={split.name} due={split.due} id={index} />
    //     <h1>{split.name}</h1>
    // )

    return (
        <FocusWrapper>
            <FocusHeader projName={projName} dueDate={dueDate} />
            <ul>
                {/* {splitList} */}
            </ul>
            <UpdateSplit splitId={1} name={"Math"} due={"2015-03-25"}></UpdateSplit>
        </FocusWrapper>
    )
}
export default Focus