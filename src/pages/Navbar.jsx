import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ scrollActions }) => {
    const [on, setOn] = useState(false);

    const handleNavClick = (section) => {
        scrollActions.current?.[section]?.();
        setOn(false);
    }

    return ( 
        <>
            <div className="top-bar">
                <div className="logo">
                    <h2>Sammie<span>King</span></h2>
                </div>
                <div className="menu-icon" onClick={() => setOn(!on)}>
                    &#9776;
                </div>
            </div>
            <nav className={on ? "active" : ""}>
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