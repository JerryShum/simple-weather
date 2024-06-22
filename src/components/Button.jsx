export default function Button({ children, handleClick }) {
   return (
      <button
         className="bg-blue-900 hover:bg-blue-950 duration-200 text-white font-bold py-2 px-4 rounded"
         onClick={handleClick}
      >
         {children}
      </button>
   );
}
