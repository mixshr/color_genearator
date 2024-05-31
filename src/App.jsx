import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import Form from "./Form";
import ColorList from "./ColorList";

function App() {
  return <main>
    <Form />
    <ColorList />
  </main>
}

export default App
