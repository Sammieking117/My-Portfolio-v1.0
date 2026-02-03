import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import { Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
    const projects = [
        {image: "/images/semgr.png", name: "Semester Manager", id: 1},
        {image: "/images/pulse.png", name: "Pulse", id: 2},
        {image: "", name: "My Porfolio", id: 3}
    ]

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
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="projects-pagination"></div>
        </div>
     );
}
 
export default Projects;