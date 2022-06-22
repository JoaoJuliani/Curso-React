import Button from './evento/Button'

function EventoProps(){

    function PrimeiroEventoProps(){
        return console.log("Evento Disparado!")
    }

    return (
        <Button event={PrimeiroEventoProps} text =""/>
    )
}

export default EventoProps