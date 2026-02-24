import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ scrollActions, menuOPen, setMenuOpen }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (section) => {
        setMenuOpen(false);
        if (location.pathname === '/') {
            scrollActions.current?.[section]?.();
        } else {
            navigate('/', { state: { scrollTo: section } });
        }
    };

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
                    <li><a style={{cursor: 'pointer'}} onClick={() => 
                        handleNavClick("hero")}>Home</a></li>
                    <li><a style={{cursor: 'pointer'}} onClick={() =>
                        handleNavClick("about")}>About</a></li>
                    <li><a style={{cursor: 'pointer'}} onClick={() =>
                        handleNavClick("projects")}>Builds</a></li>
                    <li><a style={{cursor: 'pointer'}} onClick={() =>
                        handleNavClick("services")}>Services</a></li>
                    <li><a style={{cursor: 'pointer'}} onClick={() =>
                        handleNavClick("contact")}>Let's Talk</a></li>
                </ul>
            </nav>
        </>
     );
}
 
export default NavBar;