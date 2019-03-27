import React from 'react';

import City from '../../components/City/City';
import H2 from '../../components/UI/Heading/H2/H2';
import berlin from '../../Assets/berlin.jpg';
import london from '../../Assets/london.jpg';
import lisbon from '../../Assets/lisbon.jpg';
import sanFrancisco from '../../Assets/san-francisco.jpg';


const Cities = () => {
  return (
    <section className="cities">
      <H2>WE'RE CURRENTLY IN THESE CITIES</H2>
      <div className="cities__content">

        <City 
          image={lisbon}
          name="LISBON"
          customer="1600"
          chefs="60"
          handle=""
        /> 
         <City 
          image= {sanFrancisco}
          name="SAN FRANCISCO"
          customer="3700"
          chef="160"
          handle=""
        /> 
        <City 
          image={berlin}
          name="BERLIN"
          customer="2300"
          chefs="110"
          handle=""
        /> 
        <City 
          image={london}
          name="LONDON"
          customer="1200"
          chefs="50"
          handle=""
        />
      </div>
      
    </section>

  );
}

export default Cities;