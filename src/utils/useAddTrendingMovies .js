import { APIOPTIONS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from './movieSlice'
import { useEffect } from 'react'

export const useAddTrendingMovies  = () => {
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', APIOPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }
    useEffect(() => {!topRatedMovies && getPopularMovies() }, [])
}