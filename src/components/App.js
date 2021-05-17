import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

import Top from './Top'
import Movies from './Movies'
import Sessions from './Sessions'
import Seats from './Seats'
import Success from './Success'

export default function App(){
    const [ buyer, setBuyer] = useState("")
    const [ cpf, setCpf ] = useState("")
    const [ selectedSeats, setSelectedSeats ] = useState([])
    const [ movie, setMovie ] = useState({})
    const [ day, setDay] = useState("")
    const [ name, setName] = useState("")

    
    return(
        <>
        <Top />
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Movies />
                </Route>
                <Route path='/sessoes/:movieId' exact>
                    <Sessions />
                </Route>
                <Route path='/assentos/:sessionId' exact>
                    <Seats cpf={cpf} buyer={buyer} selectedSeats={selectedSeats} movie={movie} day={day} name={name}
                     setBuyer={setBuyer} setCpf={setCpf} setSelectedSeats={setSelectedSeats} setMovie={setMovie} setDay={setDay}
                        setName={setName} />
                </Route>
                <Route path='/sucesso'>
                    <Success cpf={cpf} buyer={buyer} selectedSeats={selectedSeats} movie={movie} day={day} name={name} />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}