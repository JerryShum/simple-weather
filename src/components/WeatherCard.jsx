import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({ icon, date, temperature, description }) {
   const dateJS = new Date(`${date}`);
   const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

   const isToday = dateJS.toDateString() === new Date().toDateString();
   const dayLabel = isToday ? "Today" : dayNames[dateJS.getDay()];

   return (
      <div className=" last-of-type:border-r-0 border-r p-2 w-full ">
         <div>
            <span className="font-semibold text-lg">{dayLabel}</span>
            <span> | {dateJS.toLocaleDateString()}</span>
         </div>

         <p>{temperature}°C</p>
         <div className="flex justify-center">
            <WeatherIcon iconLabel={icon} />
         </div>
         <p>{description}</p>
      </div>
   );
}
