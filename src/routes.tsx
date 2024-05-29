import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { CreateAddress } from './pages/CreateAddress'
import { EditAddress } from './pages/EditAddress'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newaddress" element={<CreateAddress />} />
        <Route path="/editaddress/:id" element={<EditAddress />} />
      </Routes>
    </BrowserRouter>
  )
}
