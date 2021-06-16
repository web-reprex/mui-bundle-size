import logo from "./logo.svg";
import "./App.css";
import { Button, TextField } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Button>this is mui button</Button>
      <TextField value="this is text field" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
