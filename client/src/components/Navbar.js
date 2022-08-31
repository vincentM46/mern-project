import { Link } from 'react-router-dom';
import cat from '../images/cat.png';
import { useContext } from 'react';
import { Context } from '../context/Context';

function Navbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className="navbar">
            <div className="Logo">
                <Link className="link" to="/">
                    <i class="bigLego fa-solid fa-house"/>
                </Link>
            </div>
            <div className="nav">
                <ul className="navList">
                    <li className="navItems">
                        <Link className="link" to="/AboutPage">
                            ABOUT
                        </Link>
                    </li>
                    <li className="navItems">
                        <Link className="link" to="/CoolPage">
                            COOL
                        </Link>
                    </li>
                    <li className="navItems">
                        <Link className="link" to="/Post">
                            POST
                        </Link>
                    </li>
                    {/* <li className="navItems">
                        <Link className="link" to="/Discover">
                            Discover
                        </Link>
                    </li> */}
                    <li className="navItems" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                    </ul>
                    {user ? (
                    <div className="user">
                        <img className="userImage" alt="" src={cat}/>
                    </div>
                    ) : (
                        <ul className="navList">
                        <li className="navItems">
                            <Link className="link" to="/Register">
                                Register
                            </Link>
                        </li>
                        <li className="navItems">
                            <Link className="link" to="/Login">
                                Login
                            </Link>
                        </li>
                        </ul>
                    )}
            </div>
        </div>
    )
}

export default Navbar;