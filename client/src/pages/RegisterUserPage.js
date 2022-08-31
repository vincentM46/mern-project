import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function RegisterUserPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        try {

        const res = await axios.post("/authentication/register", { username, email, password });
        res.data && window.location.replace("/login");
        }catch (error) {
            setError(true)
        }
    };

    return (
        <div className="register">
            <span className="registerTop">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Your Email</label>
                <input className="registerText" type="text" placeholder="Enter your email" onChange={event => setEmail(event.target.value)}></input>
                <label>Desired Username</label>
                <input className="registerText" type="text" placeholder="Choose your username" onChange={event => setUsername(event.target.value)}/>
                <label>Desired Password</label>
                <input className="registerText" type="password" placeholder="Enter your password" onChange={event => setPassword(event.target.value)}/>
                <button className="registerButton2" type="submit">Register</button>
            </form>
            <button className="loginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span>There seems to be an issue here</span>}
        </div>
    )
}

export default RegisterUserPage;
