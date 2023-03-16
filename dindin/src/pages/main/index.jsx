import { MainPageBox, MainPaperFilterButton, ButtonFilterApplication, CustomTable, TableCellBorderRadius, CustomTableHead, MainPaperFilter, CustomTableContainer, MainPageContent } from './styles'
import HeaderPart from '../../components/header'
import { Box, TableBody, TableCell, Typography } from '@mui/material'
import Filter from '../../assets/filter.svg'
import { useState } from 'react'
import CustomTableRow from '../../components/tableRow'
import Modal from '../../components/modal'
import UserForm from '../../components/userForm'
import TransitionForm from '../../components/transitionForm'

export default function MainPage() {
    const [filterBoolean, setFilterBoolean] = useState(false)
    const [userFormBoolean, setUserFormBoolean] = useState(false)
    const [transitionFormBoolean, setTransitionFormBoolean] = useState(false)

    return (
        <>
            <MainPageBox>
                <HeaderPart setUserFormBoolean={setUserFormBoolean} />
                <MainPageContent>
                    <MainPaperFilterButton onClick={() => setFilterBoolean(!filterBoolean)}>
                        <img style={{ width: '18px', height: '18px' }} src={Filter} alt='Filtro' />
                        <Typography variant='filterTitle'>
                            Filtrar
                        </Typography>
                    </MainPaperFilterButton>
                    {filterBoolean && (
                        <MainPaperFilter>
                            <Box sx={{ marginBottom: '20px' }}>
                                <Typography variant='filterTitle' color='#B9B9B9'>
                                    Categorias
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '18px', marginTop: '20px' }}>
                                <ButtonFilterApplication>
                                    <Typography variant='filterTitle' color='black'>
                                        Limpar Filtros
                                    </Typography>
                                </ButtonFilterApplication>
                                <ButtonFilterApplication chosen='true'>
                                    <Typography variant='filterTitle' color='white'>
                                        Aplicar Filtros
                                    </Typography>
                                </ButtonFilterApplication>
                            </Box>
                        </MainPaperFilter>
                    )}
                    <CustomTableContainer>
                        <CustomTable>
                            <CustomTableHead>
                                <TableCellBorderRadius side={'left'} align='left'>
                                    <Typography variant='tableTitle'>
                                        Data
                                    </Typography>
                                </TableCellBorderRadius>
                                <TableCell align='center'>
                                    <Typography variant='tableTitle'>
                                        Dia da semana
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant='tableTitle'>
                                        Descrição
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant='tableTitle'>
                                        Categoria
                                    </Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Typography variant='tableTitle'>
                                        Valor
                                    </Typography>
                                </TableCell>
                                <TableCell />
                                <TableCellBorderRadius side='right' />
                            </CustomTableHead>
                            <TableBody>
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                                <CustomTableRow setTransitionFormBoolean={setTransitionFormBoolean} />
                            </TableBody>
                        </CustomTable>
                    </CustomTableContainer>
                </MainPageContent>
            </MainPageBox>
            <Modal open={userFormBoolean}>
                <UserForm
                    setUserFormBoolean={setUserFormBoolean}
                />
            </Modal>
            <Modal open={transitionFormBoolean}>
                <TransitionForm
                    text='Adicionar'
                    setTransitionFormBoolean={setTransitionFormBoolean}
                />
            </Modal>
        </>
    )
}