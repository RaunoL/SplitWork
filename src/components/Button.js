import React from "react"
function Button() {
    const { id } = props
    const { action } = props
    const { text } = props
    return (
        <button className={"button"} id={id} onClick={action}>{text}</button>
    )
}