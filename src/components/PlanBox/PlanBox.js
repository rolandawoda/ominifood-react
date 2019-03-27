import React from 'react';

import H3 from '../UI/Heading/H3/H3';
import iconCross from '../../Assets/SVG/cross.svg';
import iconCheck from '../../Assets/SVG/check.svg';

const PlanBox = (props) => {

  return (
    <div className="planbox">
       <div className="planbox__header">
        <H3>{props.category}</H3>
        <p className="planbox__amount">{props.amount}$<span>/month</span></p>
        <p className="planbox__price">That's only {props.price}$ per meal</p>
      </div>
      <div className="planbox__body">
        <ul className="planbox__list">
          <li className="planbox__item"><img className="planbox__icon" src={ props.item1 ? iconCheck : iconCross } /> {props.item1}</li>
          <li className="planbox__item"><img className="planbox__icon" src={ props.item2 ? iconCheck : iconCross } /> {props.item2}</li>
          <li className="planbox__item"><img className="planbox__icon" src={ props.item3 ? iconCheck : iconCross } /> {props.item3}</li>
          <li className="planbox__item"><img className="planbox__icon" src={ props.item4 ? iconCheck : iconCross } /> {props.item4}</li>
        </ul>
      </div>
      <div className="planbox__footer">
          <a href="#" className={props.category === "premium" ? " btn btn--full": " btn btn--ghost"}>          
            Sign up Now
          </a>
      </div>
     
    </div>
  );
 }

export default PlanBox;