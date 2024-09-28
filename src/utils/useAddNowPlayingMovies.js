import { APIOPTIONS } from './constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from './movieSlice'
import { useEffect } from 'react'

export const useAddNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', APIOPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(() => { getNowPlayingMovies() }, [])
}