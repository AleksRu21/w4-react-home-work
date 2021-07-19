import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Weather Forecast</h1>
      <div>
        <form onClick>
          <input
            type="search"
            autoFocus="on"
            placeholder="Search for the city..."
          />
          <input type="button" value="Search" />
          <button>Current location</button>
        </form>
      </div>

      <ul className="current-forecast">
        <li>Humidity:</li>
        <li>Description: </li>
        <li>Wind:</li>
      </ul>
      <h2>Ede</h2>
      <i className="fas fa-cloud-sun"></i>

      <ul>
        <li className="daily-forecast">Monday</li>
        <li className="daily-forecast">Tuesday</li>
        <li className="daily-forecast">Wednesday</li>
        <li className="daily-forecast">Thursday</li>
        <li className="daily-forecast">Friday</li>
        <li className="daily-forecast">Saturday</li>
        <li className="daily-forecast">Sunday</li>
      </ul>

      <ul>
        <li className="weather-temperature">23°</li>
        <li className="weather-temperature">23°</li>
        <li className="weather-temperature">25°</li>
        <li className="weather-temperature">24°</li>
        <li className="weather-temperature">25°</li>
        <li className="weather-temperature">27°</li>
        <li className="weather-temperature">24°</li>
      </ul>
      <ul></ul>
    </div>
  );
}

export default App;
