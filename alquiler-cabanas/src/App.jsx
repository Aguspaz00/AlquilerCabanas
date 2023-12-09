import React, { useEffect, useState } from 'react'
import './App.css'
import Routing from './components/Routing'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from './components/Loading'


function App() {
  const [loading, setLoading] = useState(true);

  const getData =()=> {
    return new Promise(()=> {
      setTimeout(()=> {
        setLoading(false);
    }, 2000);
    })
  }
  useEffect(()=> {
    getData()
    .then(res => {
      setLoading(false);
    })
  }, []); 
  
  if(loading){
    return(
      <Loading/>
    )
  }
  else{
      return (
    <div>
      <Routing/>
    </div>
    );
  }

}

export default App
