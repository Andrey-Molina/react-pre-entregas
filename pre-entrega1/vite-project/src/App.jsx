import { useState } from 'react'
import {Navbar} from "./components/Navbar/Nabvar.jsx";
import {ItemListContainer} from "./components/ItemList/ItemListContainer.jsx";
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App
