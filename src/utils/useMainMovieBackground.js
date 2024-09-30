import { useEffect } from "react"
import { APIOPTIONS } from "./constants";
import { addMoviesTrailer } from "./movieSlice";
import { useDispatch, useSelector } from "react-redux";

export const useMainMovieBackground = (movieid) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid.id+"/videos?language=en-US", APIOPTIONS)
        const json = await data.json();

        const trailer = json.results.filter((video) => video.type === 'Trailer' && video.name === 'Official Trailer')
        const trailerVideo = trailer.length ? trailer : json.results[0];
        dispatch( addMoviesTrailer(trailerVideo[0]))
    }
    useEffect(
        () => {
            !trailerVideo && getMovieVideos()
        }, []
    )
}