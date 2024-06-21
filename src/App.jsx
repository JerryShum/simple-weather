import { useState } from "react";
import { useEffect } from "react";

function App() {
   const [weatherData, setWeatherData] = useState({});

   useEffect(function () {
      async function apiCall() {
         try {
            const response = await fetch(
               "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Toronto?unitGroup=us&key=HSCGAMJMGPCQ2H4TL673GQABT&contentType=json"
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
      <>
         <h1 className="flex items-center justify-center font-bold text-4xl">
            Simple Weather
         </h1>
         <h2>Hello World 2!</h2>
      </>
   );
}

export default App;
