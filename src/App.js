import logo from './logo.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent nome="clicca" />
        <p>Primo esercizio react</p>
        <ImageComponent srcphoto="https://placedog.net/200" alt="photo" />
        <ButtonComponent nome="cliccami" />
      </header>
    </div>
  );
}

export default App;
