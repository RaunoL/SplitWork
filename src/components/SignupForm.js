import React from "react"
import TextInput from "./TextInput"
import PasswordInput from "./PasswordInput"
import Button from "./Button"
import firebaseApp from "../services/firebase/firebase"
function SignupForm(){
    const handleSignup = (e)=>{
        const { email, password } = e.target.elements;
        firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    }
    return(
        <form onSubmit={handleSignup}>
            <label htmlFor="email">Email</label>
            <TextInput id={"email"}/>
            <label htmlFor="password">password</label>
            <PasswordInput id={"password"}/>
            <Button id={"singup"} text={"Sign up"}></Button>
        </form>
    )
}
export default SignupForm