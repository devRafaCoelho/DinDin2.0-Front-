import { Box } from '@mui/material'
import { useEffect } from 'react'
import FullFilter from '../../components/fullFilter'
import FullTable from '../../components/fullTable'
import HeaderPart from '../../components/header'
import Modal from '../../components/modal'
import FullResume from '../../components/resume'
import TransitionForm from '../../components/transactionForm'
import useAppContext from '../../hooks/useAppContext'
import {
  MainPageAll,
  MainPageBox
} from './styles'

export default function MainPage() {
  const {
    openTransactionForm,
    functionGetTransactions,
    functionGetCategories,
    functionGetResumeValues,
    categories
  } = useAppContext()

  useEffect(() => {
    functionGetCategories()
    functionGetResumeValues()
  }, [])

  useEffect(() => {
    functionGetTransactions()
  }, [categories])


  return (
    <>
      <MainPageBox>
        <HeaderPart />
        <MainPageAll>
          <Box sx={{ width: '70%' }}>
            <FullFilter />
            <FullTable />
          </Box>
          <FullResume />
        </MainPageAll>
      </MainPageBox>
      <Modal open={openTransactionForm}>
        <TransitionForm />
      </Modal>
    </>
  )
}
