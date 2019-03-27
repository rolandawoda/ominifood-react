import React from 'react';

const Button = (props) => {
  let button = <a className="btn" href="#">props.children</a>;

  if( props.type === 'full'){
   button = <a className="btn btn--full" href="#">{props.children}</a>;
  }
  if(props.type === 'ghost'){
  button = <a className="btn btn--ghost" href="#">{props.children}</a>;
  }
  return  button;
}

export default Button;