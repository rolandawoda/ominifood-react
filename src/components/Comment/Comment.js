import React from 'react';

const Comment = (props) => {
  return (
    <blockquote className="comment">
      {props.comment}

      <cite className="comment__cite">
        <img className="comment__img" src={props.img} alt="Profile Picture" />
        {props.username}
      </cite>
      
    </blockquote>

  )
}

export default Comment;