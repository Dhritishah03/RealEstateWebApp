import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';

const PropertyDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const housesCollectionRef = collection(db, 'PropertyRecord');

  useEffect(() => {
    const getHouse = async () => {
      const querySnapshot = await getDocs(housesCollectionRef);
      const housesData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const matchedHouse = housesData.find((house) => house.id === id);
      setHouse(matchedHouse);
    };

    getHouse();
  }, [id, housesCollectionRef]);

  if (!house) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className='mt-[100px] container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <h2 className='text-2xl font-semibold'>{house.propertyName}</h2>
        <h3 className='text-lg mb-4'>{house.address}</h3>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-black rounded-full text-white px-3 inline-block'>
            {house.propertyType}
          </div>
          <div className='bg-slate-200 rounded-full text-black font-semibold px-3 inline-block'>
            {house.state}
          </div>
        </div>
        <div className='text-3xl font-semibold text-cyan-600'>$ {house.price} </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='flex gap-x-6 text-cyan-600 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{house.area}</div>
            </div>
          </div>
          <p className='mb-[50px]'>{house.description}</p>
          <div>
            <SimpleImageSlider
              width={720}
              height={414}
              images={house.propertyImages}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>
        <div className='mt-[40px] mr-[-100px] flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.propertyImages[0]} alt='' />
            </div>
            <div>
              <Link to='' className='text-cyan-700 text-sm'>
                View listings
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Name*'
            />
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Email*'
            />
            <input
              className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Phone*'
            />
            <textarea
              className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
              type='text'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
            />
            <div className='flex gap-x-2'>
              <button
                className='bg-black hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
