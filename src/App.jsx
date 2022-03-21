import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import "./app.scss";

import { useState } from "react";
import Skills from "./components/skills/Skills";
import { red } from "@mui/material/colors";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Intro />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
