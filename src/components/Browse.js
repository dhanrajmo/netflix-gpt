import React from 'react'
import Header from './Header'
import { useAddNowPlayingMovies } from '../utils/useAddNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useAddPopularMovies } from '../utils/useAddPopularMovies'
import { useAddTrendingMovies } from '../utils/useAddTrendingMovies '
import { useAddUpcommingMovies } from '../utils/useAddUpcommingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useAddNowPlayingMovies()
  useAddPopularMovies();
  useAddTrendingMovies()
  useAddUpcommingMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? (<GPTSearch />) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>)}

    </div>
  )
}

export default Browse