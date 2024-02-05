import React, { useState } from "react";
import "./Card.css";

export const Card = ({ movie }) => {


  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        className="card_img"
        alt={movie.original_title}/>
    </>
  );
};
