import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [on, setOn] = useState(false);

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
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Builds</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Let's Talk</Link></li>
                </ul>
            </nav>
        </>
     );
}
 
export default NavBar;