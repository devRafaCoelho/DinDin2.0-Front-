import { useState } from 'react'

import { createContext } from 'react'

export const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState('')
  const [openUserModal, setOpenUserModal] = useState(false)

  return (
    <AppContext.Provider value={{ userData, setUserData, openUserModal, setOpenUserModal }}>
      {children}
    </AppContext.Provider>
  )
}
