import cat from '../images/cat.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="Logo">
                <i className="lego fa-brands fa-linkedin"></i>
                <i className="lego fa-brands fa-square-instagram"></i>
                <i className="lego fa-brands fa-square-github"></i>
                <i className="lego fa-brands fa-facebook"></i>
            </div>
            <div className="nav">
                <ul className="navList">
                    <li className="navItems">HOME</li>
                    <li className="navItems">ABOUT</li>
                    <li className="navItems">COOL</li>
                    <li className="navItems">POST</li>
                    <li className="navItems">LOGOUT</li>
                </ul>
            </div>
            <div className="user">
                <img className="userImage" alt="" src={cat}/>
                <i className="searchUser fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Navbar;