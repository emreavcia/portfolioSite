import { Route, Routes } from "react-router-dom";

import Joy from "./components/Joy";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import "./css/grid.css";
import "./css/body.css";

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes>
        <Route path="/" element={<Joy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
