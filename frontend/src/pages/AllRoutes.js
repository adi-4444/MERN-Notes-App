import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Landing Page/LandingPage'
import MyNotes from './My Notes/MyNotes'

const AllRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/mynotes' element={<MyNotes />} />
         </Routes>
      </Router>
   )
}

export default AllRoutes