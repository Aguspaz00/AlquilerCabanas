import './App.css'
import ItemsListContainer from './components/ItemsListContainer'
import NavBar from './components/NavBar'
// import ItemCount from './components/ItemCount/IntemCount'

function App() {
  return (
    <>
      <div>
       <NavBar />
       <ItemsListContainer saludo={'Bienvenidos'}/>
      </div>
    </>
  )
}

export default App
