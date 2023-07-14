
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout