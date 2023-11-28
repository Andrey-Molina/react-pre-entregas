
import {CartWidget} from "../CartWidget/CartWidget.jsx";
import './Navbar.scss'

export const Navbar = () => {
  return(
      <header className="flex justify-around p-2 bg-gray-900 text-amber-50">
          <h1>WebSite Name</h1>
          <div className="flex items-center">
              <a href="" className="mx-2" >Home</a>
              <a href="" className="mx-2" >Products</a>
              <a href="" className="mx-2" >Contact</a>
              {/*section.class> for emmet completion*/}
              <a href={""}><CartWidget/></a>
          </div>
      </header>
  )
}