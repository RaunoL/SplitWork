import React, { useState } from "react";
import FocusHeader from "../components/FocusHeader"
import EditSplit from "../components/EditSplit"
import FocusWrapper from "../components/FocusWrapper"
import getProjectDetails from "../database/getProjectDetails"
import getProjectSplits from "../database/getProjectSplits"
import UpdateSplit from "../components/UpdateSplit"
function Focus(props) {
    const [projName, setProjName] = useState("loading")
    const [dueDate, setDueDate] = useState("loading")
    const [splits, setSplits] = useState([])
    const [currentEdit, setCurrentEdit] = useState()
    getProjectDetails().then((result) => {
        setProjName(result[0].projName)
        setDueDate(result[0].dueDate)
        getProjectSplits(result[1])
        .then((splitsResult)=>{
            setSplits(splitsResult)
        })
        
    })
    const splitList = splits.map((split, index) =>
        <EditSplit 
        status={split.status} 
        currentEdit={currentEdit} 
        setCurrentEdit={setCurrentEdit} 
        key={index} 
        name={split.name} 
        due={split.due} 
        id={index} />
    )
    return (
        <FocusWrapper>
            <FocusHeader projName={projName} dueDate={dueDate} />
            {(currentEdit) ? <UpdateSplit splitId={currentEdit.id} setCurrentEdit={setCurrentEdit} name={currentEdit.name} due={currentEdit.due} status={currentEdit.status}></UpdateSplit> : 
            <ul>
                {splitList}
            </ul>
}
            
        </FocusWrapper>
    )
}
export default Focus