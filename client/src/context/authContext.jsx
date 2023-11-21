import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: 'Chandler',
      profilePic:
        'https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900',
    })
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
