import logo from './logo.svg';
import './App.css';
import charArray from './data/characters';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
