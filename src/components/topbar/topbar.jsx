import React, { useState } from "react";
import "./topbar.scss";
export default function Topbar({ menuOpen, setMenuOpen }) {
  const [text, setText] = useState("黒");
  const handleChange = () => {
    text === "黒" ? setText("KURO.") : setText("黒");
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" onPointerEnter={handleChange}>
            {text}
          </a>
        </div>
        {/* <div className="right">
                    <div className="borgir" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='Line1'></span>
                        <span className='Line2'></span>
                        <span className='Line3'></span>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
