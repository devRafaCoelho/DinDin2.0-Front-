import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState('')
  const [categories, setCategories] = useState([])
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openTransactionForm, setOpenTransactionForm] = useState(false)
  const [textTransactionForm, setTextTransactionForm] = useState('')

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        openUserForm,
        setOpenUserForm,
        openTransactionForm,
        setOpenTransactionForm,
        categories,
        setCategories,
        textTransactionForm,
        setTextTransactionForm
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
