

export const ProductItem = ({n}) => {
    // desestructuramos las propiedades directamente donde recibe los argumentos una funcion
    return (
        <div className="p-2 hover:blur-sm">I'm item #{n}</div>
    )
}