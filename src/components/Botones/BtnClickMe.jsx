
export const BtnClickMe = ({ texto, className = '' }) => {
    
    return (
        <button className={`py-1 my-3 text-white rounded ${className}`} >
            {texto}
        </button>
    )
}