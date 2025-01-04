import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App: React.FC = () => {
 return (
   <Router>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       <div className="container-fluid">
         <Link className="navbar-brand" to="/">
           Tanay Rajkumar
         </Link>
         <button
           className="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav ms-auto">
             <li className="nav-item">
               <Link className="nav-link" to="/">
                 Home
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/about">
                 About Me
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/projects">
                 Projects
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/contact">
                 Contact
               </Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>


     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
   </Router>
 );
};


export default App;
