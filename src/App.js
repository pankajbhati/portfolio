import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Education from './Components/Education/Education';
import AboutMe from './Components/About/AboutMe';
import ContactMe from './Components/Contact/ContactMe';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home';

// css files
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={AboutMe} />
        <Route path="Experience" Component={Experience} />
        <Route path='Projects' Component={Projects} />
        <Route path="Education" Component={Education} />
        <Route path="Contact" Component={ContactMe} /> 
      </Routes>
    </Router>
  );
}

export default App;
