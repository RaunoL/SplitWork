import React from "react"
import { useHistory } from "react-router-dom";
import firebaseApp from "../services/firebase/firebase"
function Header() {
    const history = useHistory()
    const logout = ()=>{
        firebaseApp
        .auth()
        .signOut()
    }
    const redirectToHome = ()=>{
        history.push("/main")
    }
    return (
        <div className={"header"}>
            <button className={"homeButton"} id={"home"} onClick={redirectToHome} ><i className={"fas fa-home"}></i>  </button>
            <h1>Project planner</h1>
            <button className={"logoutButton"} id={"logout"} onClick={logout} ><i className={"fas fa-sign-out-alt"}></i></button>
            
        </div>

    )
}
export default Header