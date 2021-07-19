import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <form onClick>
        <input type="search" autoFocus="on" />
        <input type="button" value="Search" />
      </form>
      <h2>Ede</h2>
      <br />
      <i className="fas fa-cloud-sun"></i>
      <footer>
        <a
          href="https://github.com/AleksRu21/w4-react-home-work"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by{" "}
        <a href="https://www.linkedin.com/in/aleksandra-rudyak/">
          Aleksandra Rudyak
        </a>
      </footer>
    </div>
  );
}

export default App;
