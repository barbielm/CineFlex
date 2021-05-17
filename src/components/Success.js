export default function(props){
    const {buyer, cpf, selectedSeats, movie, day, name} = props
    console.log(props)
    return(
        <div class="success">
            <div class="title green"><strong>Pedido feito com sucesso!</strong></div>
            <div class="movie-session">
                <div class="title-strong"><strong>Filme e sessão</strong></div>
                <div class="title">{movie.title}</div>
                <div class="title">{day} - {name}</div>
            </div>
            <div class="tickets">
                <div class="title-strong"><strong>Ingressos</strong></div>
                {selectedSeats.map(selectedSeat => <div class="title">Assento {selectedSeat}</div>)}
            </div>
            <div class="buyer">
                <div class="title-strong"><strong>Comprador</strong></div>
                <div class="title">Nome: {buyer}</div>
                <div class="title">CPF: {cpf}</div>
            </div>
        </div>
    )
}