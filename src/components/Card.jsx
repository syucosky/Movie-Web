import React from 'react'

const Card = ({title, img, description}) => {
  return (
    <div className="card">
        <div className="card-header">
            <h3>{title}</h3>
        </div>
        <div className="card-body">
            <img src={img} alt={title} />
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card