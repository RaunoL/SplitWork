import React from "react"
import TextInput from "./TextInput"
import PasswordInput from "./PasswordInput"
import Button from "./Button"
function LoginForm(){
    const handleLogin = (e)=>{
        console.log(e)
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