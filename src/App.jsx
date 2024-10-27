import { useState } from "react";
import { useEffect } from "react";
import WeatherList from "./components/WeatherList";
import WeatherCard from "./components/WeatherCard";
import Button from "./components/Button";

function App() {
   const [latLng, setLatLng] = useState("");
   const [weatherData, setWeatherData] = useState(null);
   const [loading, setLoading] = useState(false);
   const forecast = weatherData ? weatherData["days"] : "";
   const APIkey = import.meta.env.VITE_API_KEY;

   useEffect(
      function () {
         async function apiCall() {
            setLoading(true);
            try {
               if (location) {
                  const response = await fetch(
                     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latLng}?unitGroup=metric&iconSet=icons2&key=${APIkey}&contentType=json`
                  );
                  console.log(response);

                  const data = await response.json();
                  setWeatherData(data);
                  console.log(data);
               } else {
                  let error = new Error("Location does not exist.");
                  throw error;
               }
            } catch (error) {
               console.log("Error! : " + error);
            }
            setLoading(false);
         }

         apiCall();
      },
      [latLng, APIkey]
   );

   function handleClick() {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(success, error);
      } else {
         console.log("Geolocation not supported");
         return;
      }

      function success(position) {
         const latitude = position.coords.latitude;
         const longitude = position.coords.longitude;
         setLatLng(`${latitude}, ${longitude}`);
      }
      console.log(position);

      function error() {
         console.log("Unable to retrieve your location");
      }
   }

   return (
      <div className="h-screen flex flex-col justify-center items-center">
         <h1 className="mb-5 font-bold text-4xl">Simple Weather</h1>

         {loading ? (
            <p>Loading...</p>
         ) : weatherData ? (
            <>
               <WeatherList>
                  {forecast?.slice(1, 8).map((day, index) => (
                     <WeatherCard
                        icon={day["icon"]}
                        date={day["datetime"]}
                        temperature={day["feelslike"]}
                        description={day["description"]}
                        key={index}
                     />
                  ))}
               </WeatherList>
            </>
         ) : (
            <Button handleClick={handleClick}>Get Location</Button>
         )}
      </div>
   );
}

export default App;
