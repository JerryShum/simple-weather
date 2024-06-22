import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({ icon }) {
   return (
      <div className="border rounded-md p-2">
         <p>Day</p>
         <p>Temperature</p>
         <img src="../assets/clear-day.png" />
         <WeatherIcon iconLabel={icon} />
      </div>
   );
}
