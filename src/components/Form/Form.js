import React from 'react';

const Form = () => {

  return (
    <form method="POST" action="#" className="form">

      <div className="form__group">
       <label for="name">Name</label>
       <input type="text" name="name" id="name" placeholder="Your name" required />
      </div>

      <div className="form__group">
       <label for="email">Email</label>
       <input type="email" name="email" id="email" placeholder="Your email" required />
      </div>

      <div className="form__group">
        <label for="search">How did you find us?</label>
        <select name="find-us" id="find-us" >
          <option value="Friends" selected>Friends</option>
          <option value="Search">Search engine</option>
          <option value="ad">Advertisement</option>
          <option value="Other">Other</option>
        </select>  
      </div>

      <div className="form__group form__flex">
        <label for="news" classNAme="form__label">Newsletter?</label>
        <input type="checkbox" id="news" name="news" checked /> Yes, please  
      </div>

      <div className="form__group">
        <label for="message">Drop us a line</label>
        <textarea name="message" id="message" placeholder="Your message"></textarea>
      </div>

      <div className="form__group">
        <input type="submit" value="Send it" className="btn btn--ghost"/> 
      </div>  

    </form>

  );
};

export default Form; 