import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Pagination, Keyboard } from 'swiper/modules';
import { projects } from '../data/projects';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {


    return ( 
        <div className="projects">
            <h2>Featured Projects</h2>
            <Swiper
                modules={[Pagination, Keyboard]}
                spaceBetween={15}
                pagination={{ clickable: true,
                    el: ".projects-pagination",
                }}
                tabIndex={0}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                className='project-swiper project-row'
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 2.2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                >
                    {projects.map((project) => (
                        <SwiperSlide
                        key={project.id}>
                        <div className="project-card">
                            <img src={project.image} className='project-img' />
                            <Link
                                key={project.id}
                                to={`/project/${project.id}`}>
                                <button className='project-action'>+</button>
                            </Link>
                            <div className="project-content">
                                <div className="project-name">
                                    <h3>{project.name}</h3>
                                    <div className="project-btn">
                                        <Link><button>Live Demo</button></Link>
                                        <Link><button>Code</button></Link>
                                    </div>
                                </div>
                                <Link
                                key={project.id}
                                to={`/project/${project.id}`}>
                                <button className="details-btn">→</button>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="projects-pagination"></div>
        </div>
     );
}
 
export default Projects;