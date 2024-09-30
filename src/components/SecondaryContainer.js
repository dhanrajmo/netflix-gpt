import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-48 relative z-20 pl-4 md:pl-12'>
      <MovieList title = {'Now Playing'} movies = {movies.nowPlayingMovies}/>
      <MovieList title = {'Popular Movies'} movies = {movies.popularMovies}/>
      <MovieList title = {'Top Rated'} movies = {movies.topRatedMovies}/>
      <MovieList title = {'Upcoming Movies'} movies = {movies.upComming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer