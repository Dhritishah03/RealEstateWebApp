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
    <div className='flex justify-center max-w-[700px] lg:mr-[40px] xl:mr-[40px] h-max'>
    <div className="flex flex-col justify-center mt-[60px]  md:w-[500px] min-h-[650px] mb-14 md:max-h-[900px]">
      <div className="flex justify-center flex-col lg:flex-row gap-6">
        <div className="ml-[60px] max-w-[768px]">
          <div>
            <h2 className="mb-3 text-3xl font-semibold">{house.propertyName}</h2>

            <div className="mb-3">
              <div className="bg-black rounded-full text-white px-3 inline-block">
                {house.propertyType}
              </div>
              <div className="bg-slate-200 rounded-full text-black font-semibold px-3 inline-block">
                {house.state}
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-x-2 items-center">
            <BiArea className="text-2xl" />
            <div className="text-lg font-medium">{house.area} sq feet</div>
          </div>
          <div className="w-[400px] mb-4">
            <p className="mb-[5px]">{house.description}</p>
            <a href={house.mapLocation} className="text-cyan-700 underline mb-[50px]" style={{ wordWrap: 'break-word' }}>
              {house.mapLocation}
            </a>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Contact Details:</h3>
            <p>Email: {house.email}</p>
            <p>Phone: {house.phone}</p>
          </div>
        </div>
        <div className="flex justify-center min-h-[500px] ">
          <SimpleImageSlider
            width="50%"
            height="60%"
            images={house.propertyImages}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div></div>
  );
};

export default PropertyDetails;
