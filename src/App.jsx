import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import './App.css'
import { ActivityTracker } from './components/ActivityTracker/ActivityTracker'

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

        <Route path="/test"
          element={
            <ActivityTracker/>
          }>
        </Route>

        <Route path="/register"
          element={
            <Register/>
          }>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
