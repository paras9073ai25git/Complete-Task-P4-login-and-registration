
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App