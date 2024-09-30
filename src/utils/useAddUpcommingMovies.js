import { APIOPTIONS } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpCommingMovies } from './movieSlice'
import { useEffect } from 'react'

export const useAddUpcommingMovies = () => {
    const upComming = useSelector(store => store.movies.upComming);
    const dispatch = useDispatch()
    const getUpcommingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', APIOPTIONS)
        const json = await data.json();
        dispatch(addUpCommingMovies(json.results))
    }
    useEffect(() => {!upComming && getUpcommingMovies()}, [])
}