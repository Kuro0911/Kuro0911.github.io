import React from "react";
import "./topbar.scss";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            KURO.
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
