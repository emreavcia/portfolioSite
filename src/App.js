import { Route, Routes } from "react-router-dom";

import "./css/colors.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import "./css/grid.css";
import "./css/body.css";

function App() {
  return (
    <main className="container">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
