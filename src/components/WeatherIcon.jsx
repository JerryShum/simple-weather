export default function WeatherIcon({ iconLabel }) {
   return (
      <img
         src={`/src/svg/${iconLabel}.svg`}
         alt={iconLabel}
         className="h-15 w-20"
      />
   );
}
