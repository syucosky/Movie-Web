import React from 'react'
import './Card.css'
export const Card = ({title, description,posterPath}) => {
  return (
    <div className="card">   
      <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`}  className="card_img" alt={title} />
    </div>
  )
}
