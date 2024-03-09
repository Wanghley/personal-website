import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages';
import AboutPage from './pages/about';
import Projects from './pages/projects';
import {Navbar, Footer} from './components';
import { NotFound } from './components';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        {/* add 404 page redirection */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
