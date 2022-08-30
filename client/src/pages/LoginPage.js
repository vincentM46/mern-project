function LoginPage() {
    return (
        <div className="login">
            <span className="loginTop">Login</span>
            <form className="loginForm">
                <label>Your Email Here</label>
                <input className="loginText" type="text" placeholder="Enter your email"/>
                <label>Your Password Here</label>
                <input className="loginText" type="password" placeholder="Enter your password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="registerButton">Register</button>
        </div>
    )
}

export default LoginPage;