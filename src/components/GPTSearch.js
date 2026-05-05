import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BGIMAGE } from '../utils/constants'

const GPTSearch = () => {
    return (
        <div className='relative min-h-screen overflow-x-hidden'>
            <div className='fixed inset-0 -z-10'>
                <img  className='w-full h-full object-cover' src={BGIMAGE}
                    alt='BG' />
            </div>
            <div className='relative z-0'>
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>

        </div>
    )
}

export default GPTSearch
