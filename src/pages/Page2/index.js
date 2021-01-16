import logo from "../../logo.svg";
import { useContext } from "react";
import StaticContext from "../../context/StaticContext";
function App() {
  const { state } = useContext(StaticContext);
  console.log(state);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Page 2</p>
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
