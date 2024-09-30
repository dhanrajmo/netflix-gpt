import { APIOPTIONS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from './movieSlice'
import { useEffect } from 'react'

export const useAddNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', APIOPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(() => {!nowPlayingMovies && getNowPlayingMovies() }, [])
}