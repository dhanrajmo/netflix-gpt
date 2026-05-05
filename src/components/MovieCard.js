import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import Play from './Play'

const MovieCard = ({ id, path }) => {
   

    if (!path) return null
    return (
        <div className='w-28 sm:w-36 md:w-48 pr-3 md:pr-4 flex-none'>
        <Link
          key = {id}
          to = {"/movie/" + id}
        >
        <img className='w-full' src={IMG_CDN_URL + path} alt='Movie Card'/>
          </Link>
        </div>
    )
}

export default MovieCard
