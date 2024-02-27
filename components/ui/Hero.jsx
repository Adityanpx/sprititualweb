import React from 'react';

  

export default function Hero() {
  return (
    <div >
      <div className='flex justify-center items-center mt-16  '>
        <img
          src='https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U='
          alt='temple'
          style={{ width: '990px', height: '580px' }}
          className='rounded-xl  '
        />
        <h1 className='absolute md:text-5xl text-3xl text-white -mt-52'>
          Meet the spiritual community like you...
        </h1>

        <div className='absolute'>
          <input
            className='p-4 rounded-xl md:w-96 mr-2'
            type='text'
            placeholder='Search for an Event'
          />
          <button className='p-4 bg-orange-500 rounded-xl text-white'>
            Go to Event
          </button>
        </div>
      </div>
      
      <div className='flex justify-center items-center mt-16'>        
        <img
          src='https://punetourism.co.in/images/places-to-visit/headers/baps-shree-swaminarayan-mandir-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg'
          alt='temple'
          style={{ width: '990px', height: '580px' }}
          className='rounded-xl'
        />
      </div>
    </div>
  );
}
