import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';

function App(props) {
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          update by Junaid Iqbal
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
 return <div><Hello/> App.js updated with {props.name} and age is {props.age}</div>;
}

export default App;
