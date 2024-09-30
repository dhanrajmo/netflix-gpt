import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestions = () => {
    const { movieList, movieResult } = useSelector(store => store.gpt)
    const dispatch = useDispatch()
    if (!movieResult) return null
    return (
        <div className='p-4 m-4 text-white bg-black bg-opacity-90'>
            <div>
                {movieList.map((iterator,index) => <MovieList key={iterator} title={iterator} movies={movieResult[index]}/> )}
            </div>
        </div>
    )
}

export default GPTMovieSuggestions