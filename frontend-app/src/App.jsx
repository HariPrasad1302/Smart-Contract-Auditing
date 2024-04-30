import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'


const routes =(
  <Router>
    <Routes>
      <Route path='/home' exact element={<Home />}/>
      <Route path='/Login' exact element={<Login />}/>
    </Routes>
  </Router>
)
const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
