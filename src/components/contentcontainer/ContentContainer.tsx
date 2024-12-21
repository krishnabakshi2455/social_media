import MainRoutes from "@/Routes/Routes"
import Navbar from "../navbar/Navbar"

const Home = () => {
  return (
      <div className='flex md:flex-row flex-col'>

          <div className=''>
              <Navbar />
          </div>
          <MainRoutes />
      </div>
  )
}

export default Home
