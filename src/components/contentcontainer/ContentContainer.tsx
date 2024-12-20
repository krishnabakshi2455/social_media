import MainRoutes from "@/Routes/Routes"
import Navbar from "../navbar/Navbar"

const Home = () => {
  return (
      <div className='flex'>

          <div className=''>
              <Navbar />
          </div>
          <MainRoutes />
      </div>
  )
}

export default Home
