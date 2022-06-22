function Evento(){

    function DispararEvento(){
        console.log("Disparou evento!")
    }
    return (
        <>
          <h1>Meu primeiro evento!</h1>
          <button onClick={DispararEvento}>Ativar!</button>
        </>
    )
}

export default Evento