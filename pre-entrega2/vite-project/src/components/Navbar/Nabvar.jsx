
import {CartWidget} from "../CartWidget/CartWidget.jsx";
import './Navbar.scss'
import {Link} from "react-router-dom";

export const Navbar = () => {
  return(
      <header className="flex justify-around p-2 bg-gray-900 text-amber-50">
          <h1>SeaCoast Barberos Restaurant</h1>
          <div className="flex items-center">
              <Link to={"/"} className="mx-2" >Home</Link>
              <Link to={"/"} className="mx-2" >Products</Link>
              <Link to="" className="mx-2" >Contact</Link>
              {/*section.class> for emmet completion*/}
              <Link to={""}><CartWidget/></Link>
          </div>
      </header>
  )
}