import Spinner from "./Spinner.jsx"


const Loader = () => {

    return (
        <div className="flex justify-center items-center flex-col gap-8 mt-20">
            <h2 className="text-4xl font-semibold">Loading...</h2>
            <Spinner />
        </div>
    )
}

export default Loader