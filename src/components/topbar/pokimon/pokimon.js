import React, { useEffect, useState } from "react";
import { getData } from "./axios.js";
import { data } from "./PokimonData.js";
import Image from "mui-image";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

export const Pokimon = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [name, setName] = useState("");
  const LoadWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    width: 100%;
  `;
  const PokimonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    width: 100%;
    flex-direction: column;
    h2 {
      color: #ccd6f6;
      text-transform: uppercase;
      span {
        color: #64ffda;
      }
    }
  `;
  useEffect(() => {
    var poki = data[Math.floor(Math.random() * data.length)];
    setName(poki);
    getData(poki)
      .then((res) => {
        setImgSrc(res.data.sprites.front_shiny);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return imgSrc !== "" ? (
    <PokimonWrap>
      <Image src={imgSrc} />
      <h2>
        A Wild <span>{name}</span> Appeared!
      </h2>
    </PokimonWrap>
  ) : (
    <LoadWrap>
      <CircularProgress size={120} />
    </LoadWrap>
  );
};
