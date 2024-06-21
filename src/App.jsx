import { useState } from "react";
import { useEffect } from "react";
import WeatherList from "./components/WeatherList";
import WeatherCard from "./components/WeatherCard";

function App() {
   const [weatherData, setWeatherData] = useState({});

   useEffect(function () {
      async function apiCall() {
         try {
            const response = await fetch(
               "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=metric&key=HSCGAMJMGPCQ2H4TL673GQABT&contentType=json"
            );

            const data = await response.json();
            setWeatherData(data);
            console.log(data);
         } catch (error) {
            console.log("Error! : " + error);
         }
      }

      apiCall();
   }, []);

   return (
      <div className="h-screen flex flex-col justify-center items-center">
         <h1 className="mb-5 font-bold text-4xl">Simple Weather</h1>
         <h2 className="mb-5 font-medium text-2xl">Location - Toronto</h2>
         <WeatherList>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
         </WeatherList>
      </div>
   );
}

export default App;
