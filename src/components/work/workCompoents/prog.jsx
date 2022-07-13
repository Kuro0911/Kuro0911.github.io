import React from "react";
import { ProgrammingWrap } from "./local.style";
import Image from "mui-image";
import cpp from "./logos/cpp_logo.svg";
import c from "./logos/c_logo.svg";
import js from "./logos/js_logo.svg";
import python from "./logos/p_logo.svg";

export const Prog = () => {
  return (
    <ProgrammingWrap>
      <h1>Programming Languages</h1>
      <div className="logo-container">
        <Image src={cpp} width={75} height={75} />
        <Image src={c} width={75} height={75} />
        <Image src={js} width={75} height={75} />
        <Image src={python} width={75} height={75} />
      </div>
    </ProgrammingWrap>
  );
};
