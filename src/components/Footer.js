export default function(props){
    const {movie} = props
    return(
        <div class="footer">
            <div class="poster">
                <img src={movie.posterURL}/>
            </div>
            <div class="title">{movie.title}</div>
        </div>
    )
}