import { APIOPTIONS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from './movieSlice'
import { useEffect } from 'react'

export const useAddPopularMovies = () => {
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', APIOPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }
    useEffect(() => { !popularMovies && getPopularMovies() }, [])
}