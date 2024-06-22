export default function WeatherIcon({ iconLabel, description }) {
   return (
      <img
         src={`/src/svg/${iconLabel}.svg`}
         alt={iconLabel}
         className="h-40 w-40"
      />
   );
}
