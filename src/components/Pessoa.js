function Pessoa({foto, nome, profissao, idade}){
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome:{nome}</h2>
            <p>Profissão:{profissao}</p>
            <p>Idade:{idade}</p>
        </div>
    )
}

export default Pessoa