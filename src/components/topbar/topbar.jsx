import React, { useState } from "react";
import "./topbar.scss";
import Button from "@mui/material/Button";
import mypdf from "./utils/Dhananjai-sharma-resume.pdf";
import "animate.css";
export default function Topbar({ menuOpen, setMenuOpen }) {
  const styles = {
    "&.MuiButton-outlined": {
      borderColor: "#64ffda",
    },
  };
  const [text, setText] = useState("黒.");
  const handleChange = () => {
    text === "黒." ? setText("KURO.") : setText("黒.");
  };
  const handleClick = () => {
    window.open(mypdf);
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" onPointerEnter={handleChange}>
            {text}
          </a>
        </div>
        <div className="right">
          <a href="#about" className="menuText">
            <text className="kanji">一</text> About
          </a>
          <a href="#work" className="menuText">
            <text className="kanji">二</text> Experience
          </a>
          <a href="#projects" className="menuText">
            <text className="kanji">三</text> Projects
          </a>
          <a href="#contact" className="menuText">
            <text className="kanji">四</text> Contact
          </a>
          <Button
            variant="outlined"
            onClick={handleClick}
            className="btn"
            sx={styles}
          >
            <text className="menuTextbtn">resume</text>
          </Button>
          {/* <div className="borgir" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='Line1'></span>
                        <span className='Line2'></span>
                        <span className='Line3'></span>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
