

export const Boton = ({texto, onClick}) => {
  return (

      <button onClick={onClick} className="flex justify-center text-white rounded font-mono hover:bg-slate-600 py-3 px-6 bg-slate-500">
              {texto}
      </button>
  )
}