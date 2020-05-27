import React from "react"
import TextInput from "./TextInput"
import PasswordInput from "./PasswordInput"
import Button from "./Button"
function SignupForm(){
    const handleSignup = (e)=>{
        console.log(e)
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