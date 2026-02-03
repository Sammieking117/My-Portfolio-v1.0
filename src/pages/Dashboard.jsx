import About from "../components/About";
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
        </div>
     );
}
 
export default Dashboard;