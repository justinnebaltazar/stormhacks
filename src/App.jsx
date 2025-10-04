import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
