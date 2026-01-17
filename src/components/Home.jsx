import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <div className="hero-content">
                <div className="hero-section">
                    <h1>Samson Innocent</h1>
                    <h2>I'm a <span>Frontend Developer</span></h2>
                    <p>I build React applications with a strong focus on
                        structure, state management, performance, and
                        usability—turning complex requirements into clean
                        interfaces.
                    </p>
                </div>
                <div className="hero-btn">
                    <Link>
                        <button>
                            <span>View Projects</span>
                            <div className="liquid"></div>
                        </button>
                    </Link>
                    <Link>
                        <button>
                            <span>Github</span>
                            <div className="liquid"></div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/hero-image.png" alt="Sammie King" />
            </div>
        </div>
     );
}
 
export default Home;