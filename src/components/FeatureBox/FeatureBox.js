import React from 'react';

import H3 from '../UI/Heading/H3/H3';
import iconInfinity from '../../Assets/SVG/infinity.svg';
import iconSwarm from '../../Assets/SVG/swarm.svg';
import iconCart from '../../Assets/SVG/cart.svg';
import iconClock from '../../Assets/SVG/clock.svg';

const getSrc = name => {
  let src = "";
  switch(name){
    case "icon-infinity":
     src  = iconInfinity;
     break;
    case "icon-swarm":
    src  =  iconSwarm;
    break;
    case "icon-cart":
    src  =  iconCart;
    break;
    case "icon-clock":
    src  =  iconClock;
  }
  return src;
}

const FeatureBox = props => {  
  return (
    <div className="feature-box">
      <img className="feature-box__icon" src= {getSrc(props.iconName)} alt={props.iconName} />
      <H3>{props.heading}</H3>
      <p className="feature-box__text">{props.text}</p>
    </div>
  );
}

export default FeatureBox;