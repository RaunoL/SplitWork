import React,{useState, useContext} from "react";
import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import Button from "../components/Button"
import {AuthContext} from "../services/firebase/Auth"
function Login() {
    const { currentUser } = useContext(AuthContext);
    const [currentFrom, setCurrentForm] = useState(null)
    console.log(currentUser);
    const toggleLogin = ()=>{
        setCurrentForm(LoginForm)
    }
    const toggleSignup = ()=>{
        setCurrentForm(SignupForm)
    }
    
    return (
        <div>
            <Button id={"login"} action={toggleLogin} text={"Log in"}/>
            <Button id={"signup"} action={toggleSignup} text={"Sign up"}/>
            {currentFrom}
        </div>
        
    )
}
export default Login