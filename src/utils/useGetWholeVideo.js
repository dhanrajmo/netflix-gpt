import React, { useEffect, useState } from 'react'
import { APIOPTIONS } from './constants'

const useGetWholeVideo = (id) => {
    const[video, setVideo] = useState(null)
    const getVideoKey = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",APIOPTIONS) 
        const json = await data.json()
        setVideo(json.results[0]);
    }
    useEffect(() => {getVideoKey()},[])
    return video;
}

export default useGetWholeVideo