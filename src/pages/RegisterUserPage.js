function RegisterUserPage() {
    return (
        <div className="register">
            <span className="registerTop">Register</span>
            <form className="registerForm">
                <label>Desired Username</label>
                <input className="registerText" type="text" placeholder="Enter your email"/>
                <label>Desired Password</label>
                <input className="registerText" type="password" placeholder="Enter your password"/>
                <button className="registerButton2">Register</button>
            </form>
        </div>
    )
}

export default RegisterUserPage;
