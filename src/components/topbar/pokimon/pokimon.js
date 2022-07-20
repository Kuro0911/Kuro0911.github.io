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
    h6 {
      font-size: 0.9rem;
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
      <Image src={imgSrc} width={100} height={100} />
      <h6>
        A Wild <span>{name}</span> Appeared!
      </h6>
    </PokimonWrap>
  ) : (
    <LoadWrap>
      <CircularProgress size={120} />
    </LoadWrap>
  );
};
