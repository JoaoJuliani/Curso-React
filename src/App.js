
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'  
import Carro from './components/Carro';
import FragmentList from './components/FragmentList'
import Evento from './components/Evento'
import FormEvento from './components/FormEvento';
import EventoProps from './components/EventoProps'

function App() {
  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <HelloWorld/>
      <SayMyName nome=" João"/>
      <Pessoa
        nome=" João"
      />
      <Carro
        modelo=" Ford Ka"
      />
      <FragmentList/>
      <Evento/>
      <FormEvento/>
      <EventoProps/>
    </div>
  );
}

export default App;
