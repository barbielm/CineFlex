import Showtime from "./Showtime"

export default function Session(props){
    const {session} = props
    const { weekday, date, showtimes } = session
    return(
        <li class="session">
            <div class="day">{`${weekday} - ${date}`}</div>

            {showtimes.map(showtime => <Showtime showtime={showtime} />)}
        </li>
    )
}