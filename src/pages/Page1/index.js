import logo from "../../logo.svg";
// import { useContext, useEffect } from "react";
// import StaticContext from "../../context/StaticContext";
// import { postExample } from "../../api";
function App() {
  // const { setstate } = useContext(StaticContext);
  // useEffect(() => {
  //   setstate({ initialState: "chao" });
  //   // postExample();
  // }, [setstate]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Page 1</p>
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
