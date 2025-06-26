import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('/owner');
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]' >
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/rooms' element={<Rooms />} />
          <Route path='/owner' element={<OwnerDashboard />} />
          <Route path='/owner/rooms' element={<OwnerRooms />} />
          <Route path='/owner/rooms/add' element={<AddRoom />} />
          <Route path='/owner/rooms/edit/:id' element={<EditRoom />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App