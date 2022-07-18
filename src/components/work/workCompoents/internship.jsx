import React from "react";
import InternWrapper from "./local.style";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import mypdf from "./utils/InternCert.pdf";
export const Internship = () => {
  const handleClick = () => {
    window.open(mypdf);
  };
  const styles = {
    "&.MuiButton-outlined": {
      borderColor: "#64ffda",
    },
  };
  return (
    <InternWrapper>
      <h1>Where I've Worked</h1>
      <div className="para-wrap">
        <h3>
          Frontend-Developer Intern @{" "}
          <a href="https://unitylabs.ai/">UnityLabs.ai</a>{" "}
          <div className="date">Feb 2022 - May 2022</div>
        </h3>
        <p>
          <ol className="list">
            <li>
              <span>
                <ArrowRightIcon />
              </span>
              Developed a website using NextJs and ReactJs
            </li>
            <li>
              <span>
                <ArrowRightIcon />
              </span>
              Worked with a team of other talented UI/UX devs on the website
            </li>
            <li>
              <span>
                <ArrowRightIcon />
              </span>
              Managed the documentation for the website
            </li>
          </ol>
        </p>
        <Button
          variant="outlined"
          onClick={handleClick}
          className="btn"
          sx={styles}
        >
          <text className="menuTextbtn">CERTIFICATE</text>
        </Button>
      </div>
    </InternWrapper>
  );
};
