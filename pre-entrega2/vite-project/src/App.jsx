
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {Navbar} from "./components/Navbar/Nabvar.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/not-found" element={ <h2>Not found</h2> }/>
            <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

// Im going to clarify then why the making of this site:
// So that tomorrow, the day i need to actually implement a site I will already have a prototype of
// what a website developed in react looks like
