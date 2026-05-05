import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-2 sm:px-4 md:px-6 overflow-hidden'>
            <h1 className='text-lg sm:text-xl md:text-3xl py-3 md:py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-auto overflow-y-hidden scrollbar-hide overscroll-x-contain'>
                <div className='flex min-w-max'>
                    {movies?.map(iterator => <MovieCard key = {iterator?.id} id = {iterator?.id} path = {iterator?.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList
