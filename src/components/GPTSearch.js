import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BGIMAGE } from '../utils/constants'

const GPTSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img  className='h-screen md:w-screen object-cover ' src={BGIMAGE}
                    alt='BG' />
            </div>
            <div className=''>
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>

        </>
    )
}

export default GPTSearch