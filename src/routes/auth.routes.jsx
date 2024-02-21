import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
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
}