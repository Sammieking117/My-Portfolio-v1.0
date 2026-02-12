import { useRef } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Dashboard = ({ onScroll }) => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);

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
            <section ref={heroRef}><Home /></section>
            <section ref={aboutRef}><About /></section>
            <section ref={projectRef}><Projects /></section>
            <section ref={serviceRef}><Services /></section>
            <section ref={contactRef}><Contact /></section>
        </div>
     );
}
 
export default Dashboard;