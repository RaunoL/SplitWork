import React from "react"
import {Link} from 'react-router-dom'
function AddButton(){
    return(
        <Link to="/create"> <button className={"addButton"}><i class="fas fa-plus"></i> Create new</button></Link>
           
    )
}

export default AddButton