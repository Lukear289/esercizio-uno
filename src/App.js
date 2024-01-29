import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent nome="clicca" />
        <p>Primo esercizio react</p>

        <ButtonComponent nome="cliccami" />
      </header>
    </div>
  );
}

export default App;
