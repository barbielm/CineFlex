import {useState} from 'react'

export default function Seat(props){
    const {seat, selectedSeats, setSelectedSeats} = props
    const [selectedSeat, setSelectedSeat] = useState(false) 

    const seatInitialClass = (seat.isAvailable) ? 'seat available' : 'seat unavailable'
    const seatClass  = (selectedSeat) ? 'seat selected' : seatInitialClass
    function selectSeat(){
        if(seatClass === 'seat available'){
            setSelectedSeat(true)
            setSelectedSeats([...selectedSeats, seat.name])
        } 
        if(seatClass === 'seat selected'){
            setSelectedSeat(false)
            let filtredSeats = []
            for(let i = 0; i < selectedSeats.length; i++){
                if(seat.name !== selectedSeats[i]){
                    filtredSeats.push(selectedSeats[i])
                }
            }
            setSelectedSeats(filtredSeats)
        } 
    }
    return(
        <li class={seatClass} onClick={selectSeat}>{seat.name}</li>
    )
}