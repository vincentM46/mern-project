import { Link } from 'react-router-dom';
import cat from '../images/cat.png';

function Navbar() {
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
                    <li className="navItems">SIGN OUT</li>
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