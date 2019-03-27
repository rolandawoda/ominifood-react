import React from 'react';

import H2 from '../../components/UI/Heading/H2/H2';
import FeatureBox from '../../components/FeatureBox/FeatureBox';

const FoodDelivery = () => (
     <section className="features">
          <H2> Get food fast &mdash; not fast food </H2>
          <p className="features__long-copy">
              Hello, we are omnifood, your new premium food delivery service. We know you are always busy. No time for cooking. So let us take care of that, we are really good at it, we promise!
          </p>
          <div className="features__boxes">
              <FeatureBox
                iconName="icon-infinity" 
                heading="Up to 365 days/year" 
                text="Never cook again! We really mean that. Our subscription plans include up to 36 days/years coverage. You can also choose to more flexiblyif that's your style."
                />
              <FeatureBox 
                iconName="icon-clock" 
                heading="Ready in 20 minutes" 
                text=" Never cook again! We really mean that. Our subscription plans include up to 36 days/years coverage. You can also choose to more flexiblyif that's your style."
                />
              <FeatureBox 
                iconName="icon-swarm" 
                heading="100% organic" 
                text="Never cook again! We really mean that. Our subscription plans include up to 36 days/years coverage. You can also choose to more flexiblyif that's your style."
                />
              <FeatureBox 
                iconName="icon-cart" 
                heading=" Order anything" 
                text="Never cook again! We really mean that. Our subscription plans include up to 36 days/years coverage. You can also choose to more flexiblyif that's your style."
                />
          </div>     
    </section>
);

export default FoodDelivery;