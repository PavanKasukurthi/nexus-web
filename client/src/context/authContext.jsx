import { createContext, useContext, useEffect, useState } from 'react'

import axios from 'axios'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = async (inputs) => {
    const res = await axios.post(
      'http://localhost:8800/api/auth/login',
      inputs,
      {
        withCredentials: true,
      }
    )

    setCurrentUser(res.data)

    //Sample user
    // setCurrentUser({
    //   id: 1,
    //   name: 'Chandler',
    //   profilePic:
    //     'https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900',
    // })
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
