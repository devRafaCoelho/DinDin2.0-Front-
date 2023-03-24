import { useState } from 'react'
import { createContext } from 'react'
import api from '../services/api'
import { getItem } from '../utils/storage'

export const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState('')
  const [categories, setCategories] = useState([])
  const [openUserForm, setOpenUserForm] = useState(false)
  const [openTransactionForm, setOpenTransactionForm] = useState(false)
  const [textTransactionForm, setTextTransactionForm] = useState('')
  const [transactions, setTransactions] = useState([])
  const [resumeValues, setResumeValues] = useState('')
  const [transactionId, setTransactionId] = useState('');
  const [transactionData, setTransactionData] = useState('');


  async function functionGetUser() {
    const token = getItem('token')

    try {
      const response = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUserData(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function functionGetCategories() {
    try {
      const token = getItem('token')

      const response = await api.get('/categorie', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setCategories(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }


  async function functionGetTransactions() {
    const token = getItem('token')

    try {
      const response = await api.get('/transaction', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTransactions(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function functionGetResumeValues() {
    try {
      const token = getItem('token')

      const response = await api.get('/resume', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setResumeValues(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function functionGetDetailTransaction() {
    try {
      const token = getItem('token')

      const response = await api.get(`/transaction/${transactionId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setTransactionData(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function functionDeleteTransaction(id) {
    try {
      const token = getItem('token')
      const response = await api.delete(`/transaction/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      functionGetTransactions()
      functionGetResumeValues()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <AppContext.Provider
      value={{
        resumeValues,
        setResumeValues,
        userData,
        setUserData,
        openUserForm,
        setOpenUserForm,
        transactions,
        setTransactions,
        openTransactionForm,
        setOpenTransactionForm,
        categories,
        setCategories,
        textTransactionForm,
        setTextTransactionForm,
        transactionId,
        setTransactionId,
        transactionData,
        setTransactionData,
        functionGetUser,
        functionGetTransactions,
        functionGetCategories,
        functionGetResumeValues,
        functionGetDetailTransaction,
        functionDeleteTransaction
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
