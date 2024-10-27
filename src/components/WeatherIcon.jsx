export default function WeatherIcon({ iconLabel, description }) {
   return (
      <img
         src={`/assets/${iconLabel}.svg`}
         alt={iconLabel}
         className="h-40 w-40"
      />
   );
}
