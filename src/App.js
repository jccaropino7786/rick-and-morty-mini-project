
import './App.css';
import charArray from './data/characters';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import { useState } from 'react'

function App() {

  const [queryCharacter, setQueryCharacter] = useState("all")

  return (
    <div >
        <SearchForm />
        <CharacterList charArray={charArray}/>
    </div>
  );
}

export default App;
