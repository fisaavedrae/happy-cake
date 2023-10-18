import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import HomePage from './assets/views/HomePage'
import ContactPage from './assets/views/ContactPage'

import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <div className="page">
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
        <div className="hero"><img src='https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_1280.jpg' /></div>
      </div >
    </>
  )
}

export default App
