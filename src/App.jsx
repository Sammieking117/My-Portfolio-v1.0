import { useRef, useState } from 'react';
import Copyright from './components/Copyright';
import './index.css'
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails';
import NavBar from './pages/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const scrollActions = useRef({});

  const [menuOPen, setMenuOpen] = useState(false);

  return (
    <>
      <Router>
        <NavBar 
          scrollActions={scrollActions} 
          menuOPen={menuOPen}
          setMenuOpen={setMenuOpen}
        />
        <Routes>
          <Route 
            exact 
            path='/' 
            element={
              <div 
                className={`page-content ${menuOPen ? 'shift' : ''}`}
                onClick={() => menuOPen && setMenuOpen(false)} 
              >
                <Dashboard onScroll={scrollActions} scrollActions={scrollActions} />
              </div> }
          />
          <Route path='/project/:id' element={<ProjectDetails />} />
        </Routes>
        <Copyright />
      </Router>
    </>
  )
}

export default App
