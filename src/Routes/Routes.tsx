import Authentication from '@/components/authentication/Authentication'
import Login from '@/components/authentication/Login'
import SignUp from '@/components/authentication/Signup'
import { Routes, Route } from 'react-router'


const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
  )
}

export default MainRoutes