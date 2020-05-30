import React, { useState, useContext } from "react";
import { Redirect } from 'react-router-dom';
import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import Button from "../components/Button"
import { AuthContext } from "../services/firebase/Auth"
import FocusWrapper from "../components/FocusWrapper"
function Login(props) {
    const { currentUser } = useContext(AuthContext);
    const [currentFrom, setCurrentForm] = useState(null)
    const toggleLogin = () => {
        setCurrentForm(LoginForm)
    }
    const toggleSignup = () => {
        setCurrentForm(SignupForm)
    }
    if (currentUser) {
        return <Redirect to="/main" />;
    }

    return (
        <FocusWrapper>
            <Button id={"login"} action={toggleLogin} text={"Log in"} />
            <Button id={"signup"} action={toggleSignup} text={"Sign up"} />
            {currentFrom}
        </FocusWrapper>

    )
}
export default Login