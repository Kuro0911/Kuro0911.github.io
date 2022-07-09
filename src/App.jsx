import React from "react";
import { useState } from "react";
import Topbar from "./components/topbar/topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/portfolio";
import Projects from "./components/Projects/projects";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Skills from "./components/skills/skills";
import "./App.scss";
import { Intro } from "./components/intro/intro";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
