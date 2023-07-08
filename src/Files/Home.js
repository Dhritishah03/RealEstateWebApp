import React from 'react';

import Arrow from '../Components.js/ArrowIcon';
import Poster from '../Components.js/Poster';
import HouseList from '../Components.js/HouseList';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Poster/>
      <Arrow />
      <HouseList />
    </div>
  );
};

export default Home;