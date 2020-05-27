import React from "react"

function NewSplitButton(props){
    const {action} = props
    return(
        <div className={"newSplit"}>
            <button onClick={action}><i class="fas fa-plus"></i></button>
        </div>
    )
}

export default NewSplitButton