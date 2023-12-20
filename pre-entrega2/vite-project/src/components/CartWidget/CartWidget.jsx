import { IoIosCart } from "react-icons/io";
export const CartWidget = () => {
    return (
        <>
            <div className="flex px-4 border-2-cyan-500">
                <p className="text-xs">0</p>
                <IoIosCart className=""/>
            </div>
        </>
    )
}
