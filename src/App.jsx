import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
        path='/'
        element={
          <>
          </>
        }>

        </Route>
        <Route path="/login"
        element={
          
          <Login/>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
