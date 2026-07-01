import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Contact />
      <Skills/>
      <Footer />
    </>
  );
}

export default App;