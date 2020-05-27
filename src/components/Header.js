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
            <Button id={"logout"} action={logout} text={"Log out"}/>
        </div>

    )
}
export default Header