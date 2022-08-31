import { Link } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../context/Context';
import axios from 'axios';


function LoginPage() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN_START "})
        try {
                const res = await axios.post("/authentication/login", { 
                username: usernameRef.current.value, 
                password: passRef.current.value, })
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }
    console.log(isFetching)
    return (
        <div className="login">
            <span className="loginTop">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Your Username Here</label>
                <input className="loginText" type="text" placeholder="Enter your email" ref={usernameRef}/>
                <label>Your Password Here</label>
                <input className="loginText" type="password" placeholder="Enter your password" ref={passRef}/>
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="registerButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}

export default LoginPage;