import { Spiner } from "./Spiner"





export const Loader = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-8">
            <h2 className="text-4xl font-bold flex justify-center items-center text-amber-800">Cargando...</h2>
            <div className="flex justify-center items-center flex-col mb-4">
                <Spiner />
            </div>
        </div>
    )
}