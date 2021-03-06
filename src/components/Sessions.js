import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Session from './Session'
import Footer from './FooterSessions'

export default function Sessions(){
    const { movieId } = useParams() 
    const [sessions, setSessions] = useState([])
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        request.then((reply) => {
            console.log(reply.data)
            const { days, title, posterURL } = reply.data
            setSessions(days)
            setMovie({title: title, posterURL: posterURL})
        })

    },[])

    return(
        <>
        <ul class="sessions">
            <div>Selecione o horário</div>
            {sessions.map(session => <Session session={session} />)}
        </ul>
        <Footer movie={movie}></Footer>
        </>
    )
}