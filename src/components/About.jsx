import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I'm a <strong>frontend developer</strong> currently focused on
                    mastering <strong>React</strong> and building production-style
                    <strong>projects</strong>. I enjoy breaking problems down, refactoring
                    messy <strong>code</strong>, and improving how users interact with
                    <strong>interfaces.</strong>
                </p>
                <div className="hero-btn">
                    <Link>
                        <button>
                            <span>Get in touch →</span>
                            <div className="liquid"></div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="about-img">
                <img src="/images/about-image.png" alt="Sammie King" />
            </div>
        </div>
     );
}
 
export default About;