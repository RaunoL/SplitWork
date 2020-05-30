import React from "react"
function FocusSplit(props) {
    const { name } = props
    const { due } = props
    const { id } = props


        return (
            <div id={"split" + id} className={"split "}>
                <button><span>{name}</span><br/> Due on <span>{due}</span></button>
            </div>
        )

}
export default FocusSplit