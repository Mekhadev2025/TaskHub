import React from 'react'
import "../Card/Card.css"
const Card = (props) => {
  return (
    <div className='cardContainer'>
        <h2 className='taskName'>
            {props.taskName}
        </h2>
      
    </div>
  )
}

export default Card
