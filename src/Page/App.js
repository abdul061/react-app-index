
import Nav from "./components/Nav"; // Import your Nav component
import Home from "./Index"; // Import your Home component
import About from "./About"; // Import your About component
import Work from "./Work";
import Footer from "./components/Footer";
import Service from "./Service";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import your Work component
// Import your Services component
// Import your Contact component

const App = () => {
  return (
    <Router>
              <Nav /> 
      <div>
{/* Navigation component */}

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
      <Footer />
      </Router>
  );
};

export default App;
