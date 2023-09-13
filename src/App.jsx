import { getApi } from "./helpers/ConsumeApi"
import { useEffect } from "react"
import { InputImg } from "./Components/InputImg"


function App() {
 

  return (
  <div style={{ display: 'flex', flexDirection:'column',  justifyContent: 'center' }}>
    <h1 style={{margin: '1rem auto', fontSize: '3rem', color: '#1B648B'}}>Proyecto Filter Pixabay</h1>
    <InputImg />
  </div>
  )
}

export default App
