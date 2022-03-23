import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Headernav from './pages/Headernav';
import Bookappoint from './pages/Bookappoint';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Headernav />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bookappoint" element={<Bookappoint />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
