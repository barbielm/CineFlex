import {Link} from 'react-router-dom'

export default function Movie(props){
    const movie = props.movie
    const {id, title, posterURL, overview, releaseDate} = movie
    return(
        <li class="movie">
            <Link to={`/sessoes/${id}`}>
                <img src={posterURL}/>
            </Link>
        </li>
    )
}