import React, { useState } from 'react'
import './App.css'

import PageTitle from './components/PageTitle'

import Square from './components/Square'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <PageTitle title={'Plus'} />
      <Square onClick={() => setCounter(counter + 1)} value={counter} />
    </>
  )
}

export default App
