import { Link } from 'react-router-dom'

export default function Showtime(props){
    const { showtime } = props
    const { id, name } = showtime
    return(
        <Link to={`/assentos/${id}`}>
            <div class="showtime">{name}</div>
        </Link>
    )
}