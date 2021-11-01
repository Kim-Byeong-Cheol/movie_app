import React from 'react';
import './App.css'
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'

function App() {
  return (
    <HashRouter>
      <Route path="/bout" component={About} />
    </HashRouter>
  )
}

export default App;