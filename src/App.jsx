import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import DuBar from './components/DuBar/DuBar'
import InnerBody from './components/InnerBody/InnerBody'

const App = () => {
  return (
    <>
    <nav className='nav'>
        <Navbar></Navbar>
    </nav>
    <div className="sidebar">
        <SideBar></SideBar>
    </div>
    <div className="main">
        <InnerBody></InnerBody>
    </div>
    
    </>
  )
}

export default App