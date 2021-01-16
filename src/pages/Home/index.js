import logo from "../../logo.svg";
import { getExample } from "../../api";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    const fn = async () => {
      const { data } = await getExample();
      console.log(data);
    };
    fn();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
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

export default Home;
