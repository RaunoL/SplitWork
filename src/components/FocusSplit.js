import React, { useState } from "react"
function FocusSplit(props) {
    const { name } = props
    const { due } = props
    const { id } = props
    const { status } = props
    const { setEditSplit } = props

    const updateSplit = (e) => {
        setEditSplit(e.target.parentElement.id)
    }
    if (status) {
        return (
            <div id={"split" + id} className={"split"}>
                <button onClick={updateSplit}><li><span>{name}</span> Is due in <span>{due}</span></li></button>
            </div>)
    }
    else {
        return (
            <div id={"split" + id} className={"split complete"}>
                <button onClick={updateSplit}><li><span>{name}</span> Is due in <span>{due}</span></li></button>
            </div>
        )
    }

}
export default FocusSplit