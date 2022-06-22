function Carro({modelo, cor, ano}){
    return (
        <div>
            <h1>Carro do Cliente</h1>
            <p>Modelo:<strong>{modelo}</strong></p>
            <p>Cor:<strong>{cor}</strong></p>
            <p>Ano:<strong>{ano}</strong></p>
        </div>
    )
}

export default Carro