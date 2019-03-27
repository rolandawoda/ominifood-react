import React from 'react';

const Meal = (props) => {
  return (
    <figure className="meal">
      <img className="meal__image" src={props.src} />
    </figure>
  )
}

export default Meal;