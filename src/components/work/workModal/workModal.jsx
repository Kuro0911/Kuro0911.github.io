import React, { useState } from "react";
import { Courses } from "../workCompoents/courses";
import { Internship } from "../workCompoents/internship";
import { Others } from "../workCompoents/others";
import { Prog } from "../workCompoents/prog";
import WorkModalWrapper from "./workModal.style";

export const WorkModal = () => {
  const [active, setActive] = useState("intern");
  const handleclick = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <WorkModalWrapper active={active}>
      <div className="wrap">
        <div className="left">
          <div className="button-wrapper">
            <button
              className={"button " + (active === "intern" ? "act" : "")}
              onClick={() => {
                handleclick("intern");
              }}
            >
              <span>Internships</span>
            </button>
            <button
              className={"button " + (active === "prog" ? "act" : "")}
              onClick={() => handleclick("prog")}
            >
              <span>Languages</span>
            </button>
            <button
              className={"button " + (active === "course" ? "act" : "")}
              onClick={() => handleclick("course")}
            >
              <span>Courses</span>
            </button>
            <button
              className={"button " + (active === "others" ? "act" : "")}
              onClick={() => handleclick("others")}
            >
              <span>Others</span>
            </button>
          </div>
        </div>
        <div className="right">
          <span id="intern">
            <Internship />
          </span>
          <span id="prog">
            <Prog />
          </span>
          <span id="course">
            <Courses />
          </span>
          <span id="others">
            <Others />
          </span>
        </div>
      </div>
    </WorkModalWrapper>
  );
};
