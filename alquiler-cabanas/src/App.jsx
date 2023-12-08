import React, { useEffect } from 'react'
import './App.css'
import Routing from './components/Routing'
import {doc, getDoc, getFirestore} from "firebase/firestore";


function App() {
  return (
    <div>
      <Routing/>
      {/* <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log('Cantida agregada', quantity)}/> */}
    </div>

  )
}

export default App
