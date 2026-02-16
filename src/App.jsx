import { useRef } from 'react';
import Copyright from './components/Copyright';
import './index.css'
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';
import NavBar from './pages/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const scrollActions = useRef({});

  return (
    <>
      <Router>
        <NavBar scrollActions={scrollActions} />
        <Routes>
          <Route exact path='/' element={<Dashboard onScroll={scrollActions} />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
        </Routes>
        <Copyright />
      </Router>
    </>
  )
}

export default App
