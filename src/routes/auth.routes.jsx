import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
<<<<<<< HEAD
import { Motorista } from '../pages/Motorista/Motorista'
import { Page2 } from '../pages/Page2/Page2'



export function AuthRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Motorista" element={<Motorista />} />
<Route path="/page2" element={<Page2 />} />
</Routes>
)
=======
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
>>>>>>> 51048585d2debf7fe0c90d6e4ad8593e8a611864
}