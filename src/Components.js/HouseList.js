import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import House from './House';
import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [filter, setFilter] = useState('');

  const housesCollectionRef = collection(db, 'PropertyRecord');

  useEffect(() => {
    const getHouses = async () => {
      const querySnapshot = await getDocs(housesCollectionRef);
      const housesData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setHouses(housesData);
    };

    getHouses();
  }, []);

  const filterHouses = (area) => {
    setFilter(area);
  };

  let filteredHouses = houses;

  if (filter === 'big') {
    filteredHouses = houses.filter((house) => house.area > 2000);
  } else if (filter === 'medium') {
    filteredHouses = houses.filter((house) => house.area >= 1000 && house.area <= 2000);
  } else if (filter === 'small') {
    filteredHouses = houses.filter((house) => house.area < 1000);
  }

  if (filteredHouses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">Sorry, nothing was found.</div>
    );
  }

  return (
    <section className="mb-20">
      <h1 className="drop-shadow-xl shadow-black text-transparent bg-clip-text bg-gradient-to-r to-cyan-900 from-sky-400 pb-5 pt-5 md:pb-10 md:pt-10 text-3xl xl:text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12">
        Our Properties
      </h1>

      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <button
            className={`${
              filter === 'all' ? 'bg-cyan-600' : 'bg-gray-400'
            } text-white px-4 py-2 rounded mr-2`}
            onClick={() => filterHouses('all')}
          >
            All
          </button>
          <button
            className={`${
              filter === 'big' ? 'bg-cyan-600' : 'bg-gray-400'
            } text-white px-4 py-2 rounded mr-2`}
            onClick={() => filterHouses('big')}
          >
            Big
          </button>
          <button
            className={`${
              filter === 'medium' ? 'bg-cyan-600' : 'bg-gray-400'
            } text-white px-4 py-2 rounded mr-2`}
            onClick={() => filterHouses('medium')}
          >
            Medium
          </button>
          <button
            className={`${
              filter === 'small' ? 'bg-cyan-600' : 'bg-gray-400'
            } text-white px-4 py-2 rounded`}
            onClick={() => filterHouses('small')}
          >
            Small
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {filteredHouses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
