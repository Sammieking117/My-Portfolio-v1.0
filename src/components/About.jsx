import { Link } from "react-router-dom";

const About = ({ scrollToContact }) => {
    return ( 
        <div className="about">
            <h2>About Me</h2>
                <div className="about-content">
                    <div className="about-message">
                        <p>
                            I'm a <strong>frontend developer</strong> focused on building 
                            interfaces that are <strong>fast, clean,</strong> and hard to break.
                             I work with <strong>React</strong> and modern <strong>CSS </strong>
                             to turn complex problems into simple user experiences.
                             I don't chase trends — I care about usability, performance, and 
                             shipping things that actually work.
                             if you want a frontend that feels intentional instead of improvised,
                             you're in the right place.
                             Let's get to work.
                        </p>
                        <div className="hero-btn">
                            <Link onClick={scrollToContact}>
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
        </div>
     );
}
 
export default About;