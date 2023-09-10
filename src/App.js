import "./styles.css";
import send from "./assets/send.svg";
import Weather from "./components/weather";
export default function App() {
  return (
    <div className="App">
      <h1 className="title">Weather-Forecasting</h1>
      <Weather />
      <input
        type="text"
        placeholder="Enter the city...."
        className="inputbox"
      />
      <img src={send} alt="send" id="sendicon" />
    </div>
  );
}
