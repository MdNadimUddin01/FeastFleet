import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Success from './pages/Success'
import Home from './pages/Home'
import Error from './pages/Error'
import ProtectedRoute from './component/ProtectedRoute'
const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/success' element={<ProtectedRoute element={<Success></Success>}></ProtectedRoute>}></Route>

        <Route path='*' element={<Error></Error>}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
