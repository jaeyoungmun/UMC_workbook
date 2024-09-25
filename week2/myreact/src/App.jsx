import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{'display':'flex', 'flexDirection':'column'}}>
      <section>
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img style={{innerWidth:'300px', height:'auto',borderRadius:'20%'}} src="./umc_image.png" alt="###"/>
            <h2 style={{color:'green'}}>umc 카드</h2>
            <p style={{color:'gray'}}>html css js</p>
            <button style={{border:'none', backgroundColor:'palevioletred', borderRadius:'20%'}}>WEB</button>
        </div>
    </section>
    </div>
  )
}

export default App
