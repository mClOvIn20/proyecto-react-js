

const Contenedor =({texto, titulo} )=> {
  return (
    <div className='container m-auto py-4'>
      <h2 className="text-4x1">{titulo}</h2>
        <p>{texto}</p>

    </div>
  )
}

export default Contenedor