import { useEffect, useRef } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Services from "../components/Services";
import { useLocation } from "react-router-dom";

const Dashboard = ({ onScroll, scrollActions }) => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const section = location.state.scrollTo;

            setTimeout(() => {
                scrollActions.current?.[section]?.();
            }, 100);
            window.history.replaceState({},
                document.title
            )
        }
    }, [location, scrollActions]);

    onScroll.current = {
        
        hero: () => 
            heroRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start" }),

        about: () => 
            aboutRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start" }),

        projects: () => 
            projectRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start"}),

        services: () => 
            serviceRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start" }),

        contact: () => 
            contactRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start" }),
    };

    return ( 
        <div className="dashboard">
            <section ref={heroRef}>
                <Home scrollToProjects={() => onScroll.current?.projects()} />
            </section>
            <section ref={aboutRef}>
                <About scrollToContact={() => onScroll.current?.contact()} />
            </section>
            <section ref={projectRef}><Projects /></section>
            <section ref={serviceRef}><Services /></section>
            <section ref={contactRef}><Contact /></section>
        </div>
     );
}
 
export default Dashboard;