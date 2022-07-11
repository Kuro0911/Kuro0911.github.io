import React from "react";
import WorkModalWrapper from "./workModal.style";

export const WorkModal = () => {
  return (
    <WorkModalWrapper>
      <div className="wrap">
        <div className="left">
          <div className="button-wrapper">
            <button className="button">Internships</button>
            <button className="button">Programming Lang</button>
            <button className="button">Web Technologies</button>
            <button className="button">Others</button>
            <button className="button">Courses</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </WorkModalWrapper>
  );
};
