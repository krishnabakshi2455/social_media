import Authentication from '@/components/authentication/Authentication'
import { Routes, Route } from 'react-router'


const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Authentication/>} />
      </Routes>
  )
}

export default MainRoutes