// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Impact from './Impact';
import Partner from './Partner';
import Registerngo from './Registerngo';
import Privacy from './Privacy';
import Solution from './Solution';
import Term from './Term';
import MapComponent from './Map'; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/registerngo" element={<Registerngo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/term" element={<Term />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
