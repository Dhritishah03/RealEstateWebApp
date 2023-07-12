import React, { useContext, useEffect, useState } from 'react';
import { db  } from '../firebaseConfig';
import { collection, getDocs  } from 'firebase/firestore';

import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  //const { houses, loading } = useContext(HouseContext);
  const [houses, setHouses]= useState([]);
  const housesCollectionRef = collection(db, "PropertyRecord");

  useEffect(() => {
    const getHouses = async () => {
      const querySnapshot = await getDocs(housesCollectionRef);
      const housesData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setHouses(housesData);
    };
  
    getHouses();
  }, []);
  
  


  // if (loading) {
  //   return (
  //     <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
  //   );
  // }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }
  
  

  return (
    <section className=' mb-20'>
      <h1 className='drop-shadow-xl shadow-black text-transparent bg-clip-text bg-gradient-to-r to-cyan-900 from-sky-400 pb-5 pt-5 md:pb-10 md:pt-10 text-3xl xl:text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12'>Our Properties</h1>

      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;