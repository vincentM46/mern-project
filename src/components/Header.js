import ocean from '../images/ocean.jpg';

function Header() {
    return (
        <div className="header">
            <span className="headerTop">Welcome to my Blog!</span>
            <img className="oceanImage" alt="" src={ocean}/>
        </div>
    )
}

export default Header;