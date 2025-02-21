import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Profilecard from './components/Profile/Profilecard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
     
      
      {/* <Navbar/>
      <About/>
      <Profilecard/>
      
      <Contact/>
      <Footer/> */}


<Router>
      <Navbar />
      <div className="text-center">
      <h1 className="text-center">HEMANTH RAJ</h1>
        <Routes>
          <Route path="/profile" element={<Profilecard />} />
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
