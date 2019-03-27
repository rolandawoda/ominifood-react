import React from 'react';

import H3 from '../../components/UI/Heading/H3/H3';
import iconTwitter from '../../Assets/SVG/twitter.svg';
import iconUser from '../../Assets/SVG/users.svg';
import iconStar from '../../Assets/SVG/star.svg';

const City = (props) => {
 
  return (
    <div className="city">
      <img className="city__image" src={props.image} alt={props.name} />
      <H3>{props.name}</H3>
      <ul className="city__list">
        <li className="city__item">
          <img className="city__icon" src={iconUser} alt="" />
          <p className="city__text">{props.customer}+ happy eaters</p>
        </li>
        <li className="city__item">
          <img className="city__icon" src={iconStar} alt="" />
          <p className="city__text">{props.chef}+ top chefs</p>
        </li>
        <li className="city__item">
          <img className="city__icon" src={iconTwitter} alt="" />
          <p className="city__text">
            <a className="city__link" href="#"> @omnifood_{props.handle}</a>
          </p>
        </li>

      </ul>
    </div>
  )
}

export default City;