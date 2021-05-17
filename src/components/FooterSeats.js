export default function Footer(props){
    const {movie, day, name} = props
    return(
        <div class="footer-seats">
            <div class="poster">
                <img src={movie.posterURL}/>
            </div>
            <div class="titles">
                <div class="title">{movie.title}</div>
                <div class="title">{day} - {name}</div>
            </div>
        </div>
    )
}