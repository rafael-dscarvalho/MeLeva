import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Passenger } from '../pages/Passenger/Passenger'
import { Page2 } from '../pages/Page2/Page2'

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/passenger" element={<Passenger />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    )
}