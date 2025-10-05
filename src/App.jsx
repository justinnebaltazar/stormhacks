import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Home } from './components/Home/Home'
import './App.css'
import { ActivityTracker } from './components/ActivityTracker/ActivityTracker'
import { Taskbar } from './components/Taskbar/Taskbar';
import { Footer } from './components/Footer/Footer'
import Wrapper from './components/Wrapper/Wrapper'

function App() {

  return (
    <BrowserRouter>
    <Taskbar />
      <Routes>
        <Route path ='/home'
        element={
          <Home/>
        }>
        </Route>

        <Route path="/login"
        element={
          <Login/>
        }>
        </Route>

        <Route path="/test"
          element={
            <Wrapper>
                <ActivityTracker/>
            </Wrapper>
          }>
        </Route>

        <Route path="/register"
          element={
            <Register/>
          }>

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
