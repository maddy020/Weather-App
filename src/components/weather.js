import "./weather.css";
import { useEffect, useState } from "react";
import feel from "../assets/feel.svg";
import humidity from "../assets/humidity.svg";
import eye from "../assets/eye.svg";
import uv from "../assets/uv.svg";
import axios from "axios";
function Weather() {
  const [weatherdata, setData] = useState(null);
  const keyid = "5933126fdfa241c0bf2142210230506";
  useEffect(() => {
    const inputData = document.querySelector("input");
    const sendbutton = document.querySelector("#sendicon");
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${keyid}&q=${inputData.value}&aqi=yes`
        );
        setData(response.data);
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    sendbutton.onclick = function () {
      fetchdata();
      inputData.value = "";
    };
  }, []);

  if (!weatherdata) {
    return <div className="mid">Please enter city below</div>;
  }
  return (
    <div className="parent">
      <div className="main-card">
        <h2>{weatherdata.location.name}</h2>
        <div className="weather">
          <img
            alt="weather"
            src={weatherdata.current.condition.icon}
            width={105}
          />
          <span className="temp">{weatherdata.current.temp_c}°C</span>
          <span>{weatherdata.current.condition.text}</span>
        </div>
      </div>
      <div className="children-card">
        <div className="card">
          <img src={feel} alt="temp" width={45} />
          <h2>Feels like </h2>
          <p>{weatherdata.current.feelslike_c}°C</p>
        </div>
        <div className="card">
          <img src={humidity} alt="temp" width={45} />
          <h2>Humidity</h2>
          <p>{weatherdata.current.humidity}%</p>
        </div>
        <div className="card">
          <img src={uv} alt="temp" width={45} />
          <h2>UV</h2>
          <p>{weatherdata.current.uv}</p>
        </div>
        <div className="card">
          <img src={eye} alt="temp" width={45} />
          <h2>Visiblity</h2>
          <p>{weatherdata.current.vis_km} km</p>
        </div>
      </div>
    </div>
  );
}
export default Weather;
