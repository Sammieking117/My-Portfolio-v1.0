import { useRef } from 'react';
import Copyright from './components/Copyright';
import './index.css'
import Dashboard from './pages/Dashboard';
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
        </Routes>
        <Copyright />
      </Router>
    </>
  )
}

export default App
