import React from 'react';

import H2 from '../../components/UI/Heading/H2/H2';
import phone from '../../Assets/app-iPhone.png';

const HowItWorks = () => {
  return (
    <section className="steps">
      <H2>HOW IT WORKS — SIMPLE AS 1, 2, 3</H2>
      <div className="steps__content">
        <div className="steps__left">
          <img className="steps__image" src={phone} alt="image" />
        </div>
        <div className="steps__right">
          <ul className="steps__list">
            <li className="steps__item">
              <span className="steps__num">1</span>
              <p className="steps__text">
                Choose the subscription plan that best fits your need and sign up today.
              </p>
            </li>

            <li className="steps__item">
              <span className="steps__num">2</span>
              <p className="steps__text">
                Order your delicious meal using our mobile app or website. Or you can even call us
              </p>
            </li>

            <li className="steps__item">
              <span className="steps__num">3</span>
              <p className="steps__text">
                Enjoy your meal in less than 20 minutes. See you next time!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;