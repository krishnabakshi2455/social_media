import App from '@/app/App'
import { Routes, Route } from 'react-router'


const MainRoutes = () => {
    return (
      <Routes>
        {/* Static route */}

        {/* Dynamic route with user id */}
        <Route path="/" element={<App />} />
        <Route path="/create" element="" />

        {/* Fallback route for unmatched paths */}
        {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
  )
}

export default MainRoutes