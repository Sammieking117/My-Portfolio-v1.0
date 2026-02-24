import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
    const { id } = useParams();

    const project = projects.find(a => a.id === id);

    if (!project) {
        return <p>Project not found</p>
    }

    return ( 
        <div className="projectDetails">
            <h2>{project.name}</h2>
            <div className="overview">
                <h3>Overview</h3>
                {project.overview.map((overview, index) => (
                    <p key={index}>{overview}</p>
                ))}
                <h4>Role: <span>{project.role}</span></h4>
                <h4>Tech Stack: <span>{project.techStack}</span></h4>
                <h4>Type: <span>{project.type}</span></h4>
                <h4>Status: <span>{project.status}</span></h4>
            </div>
            <hr />
            <div className="problem">
                <h3>Problem Statement</h3>
                {project.problem.map((problem, index) => (
                    <p key={index}>{problem}</p>
                ))}
            </div>
            <div className="features">
                <h3>Key Features</h3>
                <ul>
                    {project.keyFeatures.map((features, index) => (
                        <li key={index}><div></div>{features}</li>
                    ))}
                </ul>
            </div>
            <hr />
            <div className="structure">
                <h3>Component Structure</h3>
                <p>{project.compStructureTop}</p>
                <ul>
                    {project.compStructureBody.map((structure, index) => (
                        <li key={index}><div></div>{structure}</li>
                    ))}
                </ul>
                <p>{project.compStructureBottom}</p>
            </div>
            <div className="management">
                <h3>State Management</h3>
                <p>{project.stateManagementStrategyTop}</p>
                <ul>
                    {project.stateManagementStrategyBody.map((management, index) => (
                        <li key={index}><div></div>{management}</li>
                    ))}
                </ul>
                <p>{project.stateManagementStrategyBottom}</p>
            </div>
            <div className="persistence">
                <h3>Data Persistence</h3>
                <p>{project.dataPersistenceTop}</p>
                <ul>
                    {project.dataPersistenceBody.map((persistence, index) => (
                        <li key={index}><div></div>{persistence}</li>
                    ))}
                </ul>
                <p>{project.dataPersistenceBottom}</p>
            </div>
            <div className="challenge">
                <h3>Challenged Faced</h3>
                <ul>
                    {project.challengesFacedBody.map((challenge, index) => (
                        <li key={index}><div></div>{challenge}</li>
                    ))}
                </ul>
                <p>{project.challengesFacedBottom}</p>
            </div>
            <div className="learned">
                <h3>What I Learned</h3>
                <p>{project.whatILearnedTop}</p>
                <ul>
                    {project.whatILearnedBody.map((learned, index) => (
                        <li key={index}><div></div>{learned}</li>
                    ))}
                </ul>
                <p>{project.whatILearnedBottom}</p>
            </div>
            <div className="future">
                <h3>Future Improvement</h3>
                <p>{project.futureImprovementsTop}</p>
                <ul>
                    {project.futureImprovementsBody.map((future, index) => (
                        <li key={index}><div></div>{future}</li>
                    ))}
                </ul>
            </div>
            <div className="live-links">
                {!project.isCurrentSite && (
                    <a
                        href={project.liveLinks}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            <span>Live Demo</span>
                            <div className="liquid"></div>
                        </button>
                    </a>
                )}

                {project.isCurrentSite && (
                    <span className="current-site-note">
                        You're currently viewing the live site.
                    </span>
                )}
                <a 
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        <span>Source Code</span>
                        <div className="liquid"></div>
                    </button>
                </a>
            </div>
        </div>
     );
}
 
export default ProjectDetails;