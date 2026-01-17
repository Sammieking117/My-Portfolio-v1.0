import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
        {image: "/images/semgr.png", name: "Semester Manager", id: 1},
        {image: "/images/pulse.png", name: "Pulse", id: 2},
    ]

    return ( 
        <div className="projects">
            <h2>Featured Projects</h2>
            <div className="project-row">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} />
                        <div className="project-content">
                            <div className="project-name">
                                <h3>{project.name}</h3>
                                <div className="project-btn">
                                    <Link><button>Live Demo</button></Link>
                                    <Link><button>Code</button></Link>
                                </div>
                            </div>
                            <Link><button className="details-btn">→</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;