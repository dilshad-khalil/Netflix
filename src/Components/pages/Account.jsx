import React from 'react'
import SavedShows from '../SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'> 
        <img className='
          object-cover w-full h-[400px]' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/3ebc957d-26ce-41ff-97ab-dfd68ffdf31f/IQ-en-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg
        " alt="Background" />
        <div className='bg-black/60 fixed top-0 left-0
        w-full h-[400px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className=' font-bold text-3xl md:text-5xl'>My Shows</h1>
        </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account