import React from "react";
import { useState } from "react";
import Topbar from "./components/topbar/topbar";
import Menu from "./components/menu/menu";
import "./App.scss";
import { Projects } from "./components/Projects/projects";
import { Intro } from "./components/intro/intro";
import { Work } from "./components/work/work";
import { Social } from "./components/Social/social";
import { Contact } from "./components/contact/Contact";
import { About } from "./components/about/about";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Social />
      <div className="sections">
        <Intro />
        <About />
        <Work />
        <Projects className="long" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
