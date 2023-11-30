

const Navlink =({href, text})=> {

  return (
    <a 
    className=
    "text-white hover:text-black text-lg uppercase font-extrabold" href={text} >
        {text}
    </a>
  )
}

export default Navlink