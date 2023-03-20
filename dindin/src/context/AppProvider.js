import { useState } from 'react'

import { createContext } from 'react'

export const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState('')
  const [categories, setCategories] = useState([])
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openAddTransactionForm, setOpenAddTransactionForm] = useState(false)
  const [openEditTransactionForm, setOpenEditTransactionForm] = useState(false)

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        openUserForm,
        setOpenUserForm,
        openAddTransactionForm,
        setOpenAddTransactionForm,
        openEditTransactionForm,
        setOpenEditTransactionForm,
        categories,
        setCategories
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
