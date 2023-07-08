import React from 'react';
import a from '../images/a.jpeg'
import b from '../images/b.jpeg'
import c from '../images/d.avif'

const Poster = () => {
  return (
    <section className=' bg-[url(C:\RealEstateWebApp\RealEstateWebApp\src\images\d.avif)] mt-[270px] mb-[200px] ml-[-40px] mr-[-40px] h-full max-h-[640px] pt-[50px] mb-8 xl:mb-8'>
      <div>
        <div className='lg:ml-8 xl:ml-[135px]  items-center lg:items-start text-center lg:text-center justify-center flex-1 px-4 lg:px-0'>
          <h1 className='ml-[-80px] text-4xl lg:text-[58px] font-semibold leading-none mt-[-190px] mb-[300px]'>
            Welcome To      <span className='text-cyan-600 break-words'>Real Estate</span>
          </h1>
          <p className='ml-[-110px] mt-[-290px] mb-[300px] text-cyan-900'>
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