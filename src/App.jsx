import { useState } from 'react'
import './App.css'
import Notes from './components/notes'

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "the weather looks good, look at the sun rise",
    },
    {
      id: 2,
      text: "Its raining outside, Get an umbrella",
    },
  ])
  
  return (
    <Notes/>
  )
}

export default App
