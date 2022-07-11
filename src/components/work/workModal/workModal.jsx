import React from "react";
import { Courses } from "../workCompoents/courses";
import { Internship } from "../workCompoents/internship";
import { Others } from "../workCompoents/others";
import { Prog } from "../workCompoents/prog";
import { WebTech } from "../workCompoents/webtech";
import WorkModalWrapper from "./workModal.style";

export const WorkModal = () => {
  return (
    <WorkModalWrapper>
      <div className="wrap">
        <div className="left">
          <div className="button-wrapper">
            <button className="button">
              <span>Internships</span>
            </button>
            <button className="button">
              <span>Programming Lang</span>
            </button>
            <button className="button">
              <span>Web Technologies</span>
            </button>
            <button className="button">
              <span>Others</span>
            </button>
            <button className="button">
              <span>Courses</span>
            </button>
          </div>
        </div>
        <div className="right">
          <Internship />
          <Prog />
          <WebTech />
          <Others />
          <Courses />
        </div>
      </div>
    </WorkModalWrapper>
  );
};
