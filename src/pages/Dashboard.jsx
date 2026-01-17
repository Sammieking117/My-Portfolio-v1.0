import About from "../components/About";
import Home from "../components/Home";
import Projects from "../components/Projects";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <Home />
            <About />
            <Projects />
        </div>
     );
}
 
export default Dashboard;