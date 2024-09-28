import React from 'react'
import Header from './Header'
import { useAddNowPlayingMovies } from '../utils/useAddNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useAddNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      {/* <SecondaryContainer/> */}
    </div>
  )
}

export default Browse