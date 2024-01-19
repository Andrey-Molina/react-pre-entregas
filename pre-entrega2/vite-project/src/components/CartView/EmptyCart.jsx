import { Link } from "react-router-dom"
import Button from "../Button/Button.jsx"


const EmptyCart = () => {

    return (
        <section className="container m-auto mt-8">
        <h2 className="text-4xl font-semibold">Empty cart</h2>
        <hr />
        <p>Add a product</p>
        <Button>
          <Link to={"/"}>Back</Link>
        </Button>
      </section>
    )
}

export default EmptyCart