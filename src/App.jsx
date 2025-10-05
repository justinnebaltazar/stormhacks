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
import { About } from './components/About/About'
import { ActivityLog } from './components/ActivityLog/ActivityLog'
import { Leaderboard } from './components/Leaderboard/Leaderboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/'
        element={
          <>
          <Taskbar />
          <Home/>
          <Footer/>
          </>
        }>
        </Route>

        <Route path ='/about'
        element={
          <>
          <Taskbar />
          <About/>
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
                <ActivityLog/>
                <Leaderboard/>
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
            <Wrapper>
              <Garden/>
            </Wrapper>
          }>
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
