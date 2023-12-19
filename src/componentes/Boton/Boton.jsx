
const Boton=({ children, className= "", onClick} )=> {
  return (
    <button
    onClick={onClick}
    className={'bg-blue-400 rounded flex items-center py-2 px-4 text-center text-white font-bold my-4 ${className}' }
    >
       {children} 
    </button>
  )
}


export default Boton;