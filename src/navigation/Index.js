import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Courses from '../screens/Courses'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Info from '../screens/Info'
import Academic from '../screens/Academic'
export default function Index() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/academic' element={<Academic />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/info/:pname' element={<Info />} />
        </Routes>
    )
}
