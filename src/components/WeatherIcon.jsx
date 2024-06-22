export default function WeatherIcon({ iconLabel }) {
   return (
      <img
         src={`/src/assets/${iconLabel}.png`}
         alt={iconLabel}
         className="h-15 w-20"
      />
   );
}
