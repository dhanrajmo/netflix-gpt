import React from 'react'
import { useParams } from 'react-router-dom';
import useGetWholeVideo from '../utils/useGetWholeVideo';

const Play = () => {
    const { id } = useParams();
    const data = useGetWholeVideo(id)
  return (
    <div>
        <div className='w-full h-full'>
            <iframe
            className='w-full object-cover aspect-video'
            src={"https://www.youtube.com/embed/" + data?.key + '?&autoplay=1&mute=1'}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    </div>
  )
}

export default Play