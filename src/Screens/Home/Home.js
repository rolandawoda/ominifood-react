import React from 'react';

import H1 from '../../components/UI/Heading/H1/H1';
import Button from '../../components/UI/Button/Button';


const Home = () => (
    <div className="home">
      <div className="home__textbox">
        <H1>Goodbye junk food.<br /> Hello super healthy meal</H1>
        <Button type="full">i'm hungry</Button>
        <Button type="ghost">Show me more</Button>
      </div>
    </div>
);

export default Home;