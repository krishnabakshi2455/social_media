import React, { useState } from 'react'
import Login from './Login'
import SignUp from './Signup'
import { Button } from "@/components/ui/button"

const Authentication: React.FC = () => {

  const [actvie, setactvie] = useState("login")

  const handlechange = () => {
    if (actvie === "login") {
      setactvie("signup");
    } else {
      setactvie("login");
    }
  }

  return (
    <>
      <div className="">
        <div className="">
          {actvie === 'login' ? <Login /> : <SignUp />}

          <div className="ml-8">
            <span>
              {actvie === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <Button onClick={handlechange}>
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  Have an account?{' '}
                  <Button onClick={handlechange}>
                    Log In
                  </Button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authentication
