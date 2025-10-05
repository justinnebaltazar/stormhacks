import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { Home } from './components/Home/Home'
import './App.css'
import { ActivityTracker } from './components/ActivityTracker/ActivityTracker'
import { Taskbar } from './components/Taskbar/Taskbar';
import { Footer } from './components/Footer/Footer'
import Wrapper from './components/Wrapper/Wrapper'
import { Garden } from './components/Garden/Garden'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/home'
        element={
          <>
          <Taskbar />
          <Home/>
          <Footer/>
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

        <Route path="/garden"
          element={
            <Garden/>
          }>
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
