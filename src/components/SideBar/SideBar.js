import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../Logo/Logo';

const SideBar = (props) => {
  const center = ["sidebar__header", props.show ? "sidebar__header--center" : null];
  return (
   <nav  className="sidebar">
    <div className={center.join(" ")}>
    {!props.show ?<Logo /> : null} 
      <img className="sidebar__toggle" src={require("../../Assets/SVG/menu.svg")} alt="toggler" onClick={props.onclick} />
    </div>
    <div className="sidebar__list">
    <NavLink to="/delivery" className="sidebar__item" activeClassName="sidebar__active"><img className="sidebar__icon" src={require("../../Assets/SVG/twitter.svg")} alt="sidebar-icon" />{!props.show ? <p className="sidebar__link">FOOD DELIVERY</p> : null}</NavLink>
    <NavLink to="/howitworks" className="sidebar__item" activeClassName="sidebar__active"><img className="sidebar__icon" src={require("../../Assets/SVG/twitter.svg")} alt="sidebar-icon" />{!props.show ? <p className="sidebar__link">HOW IT WORKS</p> : null}</NavLink>
    <NavLink to="/gallery" className="sidebar__item" activeClassName="sidebar__active"><img className="sidebar__icon" src={require("../../Assets/SVG/twitter.svg")} alt="sidebar-icon" />{!props.show ? <p className="sidebar__link">GALLERY</p> : null}</NavLink>
    <NavLink to="/cities" className="sidebar__item" activeClassName="sidebar__active"><img className="sidebar__icon" src={require("../../Assets/SVG/twitter.svg")} alt="sidebar-icon" />{!props.show ? <p className="sidebar__link">OUR CITIES</p> : null}</NavLink>
    <NavLink to="/signup" className="sidebar__item" activeClassName="sidebar__active"><img className="sidebar__icon" src={require("../../Assets/SVG/twitter.svg")} alt="sidebar-icon" />{!props.show ? <p className="sidebar__link">SIGN UP</p> : null}</NavLink>
    </div>
   </nav>
  )
}

export default SideBar;
