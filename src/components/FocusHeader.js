import React from "react"

function FocusHeader(props) {
    const { projName } = props;
    const { due } = props;
    return (
        <div className={"focusHeader"}>
            <h3>{projName}</h3>
            <h4>{due}</h4>
        </div>
    )
}
export default FocusHeader