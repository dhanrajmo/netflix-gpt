import React, { useRef } from 'react'
import { openai } from './openai'
import { APIOPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptmovieResult } from '../utils/gptSlice';
const GPTSearchBar = () => {
    const searchtext = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movie) =>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1",APIOPTIONS)
        const json = await data.json();
        return json.results
    }
    const handleGptSearchClick = async () => {
        const gptQuery = 'Act as a movie recommendation system and suggest some movies for the query : ' + searchtext.current.value + '.only give me name of 5 movies, comma seperated like example reult given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        const gptMovieList = chatCompletion.choices?.[0]?.message.content.split(',')
        const data = gptMovieList.map(movie => searchMovieTMDB(movie));
        const ogResults = await Promise.all(data)
        dispatch(addGptmovieResult({movieList : gptMovieList,movieResults : ogResults}))
    }
    return (
        <div className='pt-32 md:pt-[10%] px-4 flex justify-center'>
            <form className='bg-black w-full max-w-3xl grid grid-cols-12 gap-3 p-3 md:p-4' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchtext} placeholder='what would you like to watch today' type='text' className='p-3 md:p-4 col-span-12 sm:col-span-9 min-w-0'></input>
                <button className='py-3 px-4 bg-red-700 text-white rounded-lg col-span-12 sm:col-span-3' onClick={handleGptSearchClick}>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar
