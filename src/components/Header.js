import React from "react"
import Button from "./Button"
import firebaseApp from "../services/firebase/firebase"
function Header() {
    const logout = ()=>{
        firebaseApp
        .auth()
        .signOut()
    }
    return (
        <div className={"header"}>
            <h1>Project planner</h1>
            <button className={"logoutButton"} id={"logout"} onClick={logout} ><i className={"fas fa-sign-out-alt"}></i></button>
        </div>

    )
}
export default Header