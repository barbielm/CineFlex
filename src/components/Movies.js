import {useState, useEffect} from 'react'
import axios from 'axios'

import Movie from './Movie'

export default function Movies(){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
        request.then(reply => {setMovies(reply.data)})

    },[])
    
    return(
        
        <ul class="movies">
            <div>Selecione o filme</div>
            {movies.map(movie => <Movie movie={movie} />)}
        </ul>
        
    )
}