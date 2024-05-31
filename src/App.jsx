import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import Form from "./Form";
import ColorList from "./ColorList";

function App() {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  console.log(colors)
  return <main>
    <Form />
    <ColorList />
  </main>
}

export default App
