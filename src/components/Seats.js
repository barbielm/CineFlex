import Seat from './Seat'
import Footer from './FooterSeats'

import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Seats(props){
    const {sessionId} = useParams()
    const [ seats, setSeats] = useState([])
    const { buyer, cpf, selectedSeats, movie, day, name, setBuyer, setCpf, setSelectedSeats, setMovie, setDay, setName } = props


    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`)
        request.then(reply => {
            console.log(sessionId)
            console.log(reply.data)
            setSeats(reply.data.seats)
            setDay(reply.data.day.weekday)
            setMovie(reply.data.movie)
            setName(reply.data.name)
        })

    },[])
    return(
        <>
            <ul class="seats">
                <div class="title">Selecione o(s) assento(s)</div>
                {seats.map(seat => <Seat seat={seat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />)}
                <ul class="subtitles">
                    <div class="subtitle">
                        <li class="seat selected"></li>
                        <div class="text">Selecionado</div>    
                    </div>
                    <div class="subtitle">
                        <li class="seat available"></li>  
                        <div class="text">Disponível</div>  
                    </div>
                    <div class="subtitle">
                        <li class="seat unavailable"></li>  
                        <div class="text">Indisponível</div>  
                    </div>
                </ul>
                <div class="buyer">
                    <div class="title">Nome do comprador:</div>
                    <input type="text" placeholder="Digite seu nome..." value={buyer} onChange={e => setBuyer(e.target.value)} />
                </div>
                <div class="identification">
                    <div class="title">CPF do comprador:</div>
                    <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
                </div>
                <Link to="/sucesso">
                    <div class="reserv-seat">Reservar assento(s)</div>
                </Link>
                <Footer movie={movie} day={day} name={name} />
            </ul>
        </>
    )
}