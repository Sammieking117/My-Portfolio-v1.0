import { Link } from "react-router-dom";

const NavBar = ({ scrollActions, menuOPen, setMenuOpen }) => {

    const handleNavClick = (section) => {
        scrollActions.current?.[section]?.();
        setMenuOpen(!menuOPen);
    }

    return ( 
        <>
            <div className="top-bar">
                <div className="logo">
                    <h2>Sammie<span>King</span></h2>
                </div>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOPen)}>
                    &#9776;
                </div>
            </div>
            <nav className={menuOPen ? "active" : ""}>
                <ul>
                    <li><Link onClick={() => 
                        handleNavClick("hero")}>Home</Link></li>
                    <li><Link onClick={() =>
                        handleNavClick("about")}>About</Link></li>
                    <li><Link onClick={() =>
                        handleNavClick("projects")}>Builds</Link></li>
                    <li><Link onClick={() =>
                        handleNavClick("services")}>Services</Link></li>
                    <li><Link onClick={() =>
                        handleNavClick("contact")}>Let's Talk</Link></li>
                </ul>
            </nav>
        </>
     );
}
 
export default NavBar;