
import './App.css';
import charArray from './data/characters';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import { useState } from 'react'

function App() {
  const [queryChar, setQueryChar] = useState("")

  const filteredChar = charArray.filter(char => char.name.toLowerCase().includes(queryChar) )

  return (
    <div >
        <SearchForm query={queryChar} setQuery={setQueryChar}/>
        <CharacterList charArray={filteredChar} />
    </div>
  );
}

export default App;
