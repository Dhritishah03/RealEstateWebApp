import React from 'react';
import a from '../images/a.jpeg'
import b from '../images/b.jpeg'
import c from '../images/d.avif'

const Poster = () => {
  return (
    <section className=' bg-[url(C:\RealEstateWebApp\RealEstateWebApp\src\Components.js\prop.jpg)] bg-cover mt-[-80px] ml-[-40px] mr-[-40px] h-full min-h-[1040px] pt-[50px] mb-8 xl:mb-8'>
      <div>
        <div className='lg:ml-8 xl:ml-[135px]  items-center lg:items-start text-center lg:text-center justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-white mt-[150px] ml-[-80px] text-4xl lg:text-[58px] font-semibold leading-none '>
            Welcome To      <span className='text-cyan-500 break-words'>Real Estate</span>
          </h1>
          <p className='ml-[-110px] mt-[10px] mb-[300px] text-white'>
           We Help You Find Your Dream House
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      
    </section>
  );
};

export default Poster;