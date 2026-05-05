import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/home'
import About from './Pages/About'
import Logement from './Pages/Logement'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </main>
      <Footer />
    </div>
        
  )
}

export default App;