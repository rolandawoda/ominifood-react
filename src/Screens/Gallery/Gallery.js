import React from 'react';

import Meal from '../../components/Meal/Meal';
import image1 from '../../Assets/1.jpg';
import image2 from '../../Assets/2.jpg';
import image3 from '../../Assets/3.jpg';
import image4 from '../../Assets/4.jpg';
import image5 from '../../Assets/5.jpg';
import image6 from '../../Assets/6.jpg';
import image7 from '../../Assets/7.jpg';
import image8 from '../../Assets/8.jpg';

const Gallery = () => {
  return (
      <section className="meals">
        <Meal src={image1} />  
        <Meal src={image2}/>
        <Meal src={image3}/>
        <Meal src={image4}/>
        <Meal src={image5}/>
        <Meal src={image6}/>
        <Meal src={image7}/>
        <Meal src={image8}/>
      </section>
  )
}

export default Gallery;