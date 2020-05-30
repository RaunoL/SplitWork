import React from "react"
function FocusSplit(props) {
    const { name } = props
    const { due } = props
    const { id } = props
    const { status } = props
    const { setCurrentEdit } = props

    const updateSplit = (e) => {
        
        setCurrentEdit({
            id: e.target.parentElement.id,
            name: name,
            due: due,
            status: status
        })
    }
    if (status) {
        return (
            <div id={"split" + id} className={"split complete"}>
                <button onClick={updateSplit}><span>{name}</span><br/> Due on <span>{due}</span></button>
            </div>)
    }
    else {
        return (
            <div id={"split" + id} className={"split "}>
                <button onClick={updateSplit}><span>{name}</span><br/> Due on <span>{due}</span></button>
            </div>
        )
    }

}
export default FocusSplit