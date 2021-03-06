import React from "react"
import TextInput from "./TextInput"
import PasswordInput from "./PasswordInput"
import Button from "./Button"
import firebaseApp from "../services/firebase/firebase"
function LoginForm(){
    const handleLogin = (e)=>{
        e.preventDefault();
        const { email, password } = e.target.elements;
        firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    }
    return(
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <TextInput id={"email"}/>
            <label htmlFor="password">password</label>
            <PasswordInput id={"password"}/>
            <Button id={"login"} text={"Log in"}></Button>
        </form>
    )
}
export default LoginForm