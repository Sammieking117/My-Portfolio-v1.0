import About from "../components/About";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <Home />
            <About />
            <Projects />
            <Services />
            <Contact />
        </div>
     );
}
 
export default Dashboard;