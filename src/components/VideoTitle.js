import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-32 md:pt-[10%] px-4 sm:px-8 md:px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video'>
    <h1 className='text-xl sm:text-2xl md:text-6xl font-bold max-w-full'>{title}</h1>
    <p className='hidden md:inline-block py-6 text-sm xl:text-lg w-5/6 md:w-1/2'>{overview}</p>
    <div className='my-4 md:m-0'>
        <button className='bg-white text-black py-2 md:py-4 px-4 md:px-12 text-base md:text-xl rounded-lg hover:bg-opacity-80'>Play</button>
        {/* <button className='bg-gray-50 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>More Info</button> */}
    </div>
    </div>
  )
}

export default VideoTitle
