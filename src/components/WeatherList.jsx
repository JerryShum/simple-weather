export default function WeatherList({ children }) {
   return (
      <div className="">
         <h2 className=" font-semibold text-lg underline underline-offset-2">
            7-Day Forecast
         </h2>
         <div className="mt-4 flex gap-3">{children}</div>
      </div>
   );
}
