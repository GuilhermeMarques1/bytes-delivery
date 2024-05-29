import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { CreateAddress } from './pages/CreateAddress'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newaddress" element={<CreateAddress />} />
      </Routes>
    </BrowserRouter>
  )
}
