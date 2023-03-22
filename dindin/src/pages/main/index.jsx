import { Box, TableBody, TableCell, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Filter from '../../assets/filter.svg'
import HeaderPart from '../../components/header'
import Modal from '../../components/modal'
import CustomTableRow from '../../components/tableRow'
import TransitionForm from '../../components/transactionForm'
import useAppContext from '../../hooks/useAppContext'
import api from '../../services/api'
import { DefaultButton } from '../../styles/styles'
import { getItem } from '../../utils/storage'
import {
  ButtonFilterApplication,
  CustomTable,
  CustomTableContainer,
  CustomTableHead,
  MainPageAll,
  MainPageBox,
  MainPaperFilter,
  MainPaperFilterButton,
  PageResume,
  Resume,
  ResumeValue,
  TableCellBorderRadius
} from './styles'

export default function MainPage() {
  const [filterBoolean, setFilterBoolean] = useState(false)
  const [transactions, setTransactions] = useState([])

  const { openTransactionForm, setOpenTransactionForm, setTextTransactionForm, setCategories } =
    useAppContext()

  async function getTransactions() {
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

  async function getCategories() {
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


  useEffect(() => {
    getTransactions()
    getCategories()
  }, [])


  return (
    <>
      <MainPageBox>
        <HeaderPart />
        <MainPageAll>
          <Box sx={{ width: '70%' }}>
            <MainPaperFilterButton onClick={() => setFilterBoolean(!filterBoolean)}>
              <img style={{ width: '18px', height: '18px' }} src={Filter} alt="Filtro" />
              <Typography variant="filterTitle">Filtrar</Typography>
            </MainPaperFilterButton>
            {filterBoolean && (
              <MainPaperFilter>
                <Box sx={{ marginBottom: '20px' }}>
                  <Typography variant="filterTitle" color="#B9B9B9">
                    Categorias
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '18px', marginTop: '20px' }}>
                  <ButtonFilterApplication>
                    <Typography variant="filterTitle" color="black">
                      Limpar Filtros
                    </Typography>
                  </ButtonFilterApplication>
                  <ButtonFilterApplication chosen="true">
                    <Typography variant="filterTitle" color="white">
                      Aplicar Filtros
                    </Typography>
                  </ButtonFilterApplication>
                </Box>
              </MainPaperFilter>
            )}
            <CustomTableContainer>
              <CustomTable>
                <CustomTableHead>
                  <TableCellBorderRadius side='left' align="left">
                    <Typography variant="tableTitle">Data</Typography>
                  </TableCellBorderRadius>
                  <TableCell align="center">
                    <Typography variant="tableTitle">Dia da semana</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="tableTitle">Descrição</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="tableTitle">Categoria</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="tableTitle">Valor</Typography>
                  </TableCell>
                  <TableCell />
                  <TableCellBorderRadius side="right" />
                </CustomTableHead>
                <TableBody>
                  {transactions.map(transaction => (
                    <CustomTableRow transaction={transaction} key={transaction.id} />
                  ))}
                </TableBody>
              </CustomTable>
            </CustomTableContainer>
          </Box>
          <PageResume>
            <Resume>
              <Typography sx={{ marginBottom: '23px' }} variant="resumeTitle">
                Resumo
              </Typography>
              <Box>
                <ResumeValue sx={{ marginBottom: '12px' }}>
                  <Typography variant="resumeText">Entradas</Typography>
                  <Typography variant="resumeValue" color="primary.valueEntry">
                    R$ 100,00
                  </Typography>
                </ResumeValue>
                <ResumeValue
                  sx={{
                    paddingBottom: '19px',
                    marginBottom: '16px',
                    borderBottom: 'solid 1px #EAEAEA'
                  }}
                >
                  <Typography variant="resumeText">Saídas</Typography>
                  <Typography variant="resumeValue" color="primary.valueOutput">
                    R$ 100,00
                  </Typography>
                </ResumeValue>
              </Box>
              <ResumeValue>
                <Typography variant="resumeTitle">Saldo</Typography>
                <Typography variant="resumeValue" color="#3A9FF1">
                  R$ 100,00
                </Typography>
              </ResumeValue>
            </Resume>
            <DefaultButton variant="contained" onClick={() => {
              setOpenTransactionForm(true)
              setTextTransactionForm('Adicionar')
            }}>
              <Typography variant="button" color="white">
                Adicionar Registro
              </Typography>
            </DefaultButton>
          </PageResume>
        </MainPageAll>
      </MainPageBox>

      <Modal open={openTransactionForm}>
        <TransitionForm />
      </Modal>
    </>
  )
}
