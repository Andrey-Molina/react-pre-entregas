
import {Contador} from "../Contador/Contador.jsx";
import {Contenedor} from "../Contenedor/Contenedor.jsx";

export const ButtonFn =({className})=>{
    // en los argumentos se anticipa las propiedades que se le van a permitir pasar a la funcion
    return (
        <button className={`bg-gray-900 text-white border p-2 ${className}`}>
            {"Production"}
        </button>
    )
}


