import { Boton } from "../botones/Boton"



export const NotFound = () => {
    return (
        <>
            <img className="object-cover w-full p-05" src="https://media.istockphoto.com/id/1059407138/es/foto/buck-de-venado-cola-blanca.jpg?s=2048x2048&w=is&k=20&c=Ng17hFQdjTfL0Oy5rVeiKrX4dYSdR4WjfxexDbpTYR0=" />
            <div className="flex text-center flex-col bg-gray-400">
                <h2 className="m-6">ACA NO ENCONTRARAS NATI</h2>
                <Boton texto={"Volver"} className="bg-red-700 py-2 px-9" />
            </div>
        </>
    )
}

export default NotFound