
import {CartWidget} from "../CartWidget/CartWidget.jsx";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return(
      <header className="flex justify-around p-2 bg-gray-900 text-amber-50">
          <h1>SeaCoast Barberos Restaurant</h1>
          <div className="flex items-center">
              <Link to={"/"} className="mx-2" >Home</Link>
              <Link to={"/productos/drinks"} className="mx-2" >Drinks</Link>
              <Link to={"/productos/food"} className="mx-2" >Food</Link>
              {/*section.class> for emmet completion*/}
              <Link to={""}><CartWidget/></Link>
          </div>
      </header>
  )
}