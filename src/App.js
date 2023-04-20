import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";

import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Project'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import Contact from './components/Contact/Contact'
import SignUp from './components/SignUP/SignUp'
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/WhatWeDo" element={< WhatWeDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Navigate to="/"/>} />  
          <Route path='/SignUp' component={SignUp} />
        </Routes>
        <About/>
        <Projects/>
        <WhatWeDo/>
        <Contact/>
        <Footer />
    </Router>
  );
}

export default App;