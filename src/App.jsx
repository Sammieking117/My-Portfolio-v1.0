import './index.css'
import Dashboard from './pages/Dashboard';
import NavBar from './pages/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
