
import {BrowserRouter} from "react-router-dom"

import Navbar from "./components/Navbar"
import GsapTransition from "./components/GsapTransition"
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <GsapTransition />
      
      </BrowserRouter>
    </>
  )
}

export default App
