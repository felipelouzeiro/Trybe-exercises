import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div>
      <h1 id='titulo'>POKEDEX</h1>
      <Pokedex pokemons={pokemons}/>
    </div>

  );
}

export default App;
