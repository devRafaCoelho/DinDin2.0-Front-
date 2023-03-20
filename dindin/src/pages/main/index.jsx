import { Box, TableBody, TableCell, Typography } from '@mui/material'
import { useState } from 'react'
import Filter from '../../assets/filter.svg'
import HeaderPart from '../../components/header'
import Modal from '../../components/modal'
import CustomTableRow from '../../components/tableRow'
import TransitionForm from '../../components/transactionForm'
import useAppContext from '../../hooks/useAppContext'
import { DefaultButton } from '../../styles/styles'
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
  const [transitionEditFormBoolean, setTransitionEditFormBoolean] = useState(false)

  const {
    openAddTransactionForm,
    setOpenAddTransactionForm,
    openEditTransactionForm,
    setOpenEditTransactionForm
  } = useAppContext()

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
                  <TableCellBorderRadius side={'left'} align="left">
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
                  <CustomTableRow type="a" />
                  <CustomTableRow type="a" />
                  <CustomTableRow />
                  <CustomTableRow type="a" />
                  <CustomTableRow />
                  <CustomTableRow />
                  <CustomTableRow type="a" />
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
            <DefaultButton variant="contained" onClick={() => setOpenAddTransactionForm(true)}>
              <Typography variant="button" color="white">
                Adicionar Registro
              </Typography>
            </DefaultButton>
          </PageResume>
        </MainPageAll>
      </MainPageBox>

      <Modal open={openAddTransactionForm}>
        <TransitionForm text="Adicionar" />
      </Modal>
      <Modal open={openEditTransactionForm}>
        <TransitionForm text="Editar" />
      </Modal>
    </>
  )
}
