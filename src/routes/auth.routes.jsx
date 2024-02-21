import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Passenger } from '../pages/Passenger/Passenger'
import { Ride } from '../pages/Ride/Ride'

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/passenger" element={<Passenger />} />
            <Route path="/ride" element={<Ride />} />
        </Routes>
    )
}