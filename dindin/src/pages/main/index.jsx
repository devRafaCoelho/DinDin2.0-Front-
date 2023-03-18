import { MainPageBox, MainPaperFilterButton, MainPageAll, PageResume, ResumeValue, ButtonFilterApplication, CustomTable, TableCellBorderRadius, CustomTableHead, MainPaperFilter, CustomTableContainer, MainPageContent, Resume } from './styles'
import HeaderPart from '../../components/header'
import { Box, TableBody, TableCell, Typography } from '@mui/material'
import Filter from '../../assets/filter.svg'
import { useState } from 'react'
import CustomTableRow from '../../components/tableRow'
import Modal from '../../components/modal'
import UserForm from '../../components/userForm'
import TransitionForm from '../../components/transitionForm'
import { DefaultButton } from '../../styles/styles'

export default function MainPage() {
    const [filterBoolean, setFilterBoolean] = useState(false)
    const [userFormBoolean, setUserFormBoolean] = useState(false)
    const [transitionEditFormBoolean, setTransitionEditFormBoolean] = useState(false)
    const [transitionAddFormBoolean, setTransitionAddFormBoolean] = useState(false)

    return (
        <>
            <MainPageBox>
                <HeaderPart setUserFormBoolean={setUserFormBoolean} />
                <MainPageAll>
                    <Box sx={{ width: '70%' }}>
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
                                    <CustomTableRow type='a' setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                    <CustomTableRow type='a' setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                    <CustomTableRow setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                    <CustomTableRow type='a' setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                    <CustomTableRow setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                    <CustomTableRow setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                    <CustomTableRow type='a' setTransitionEditFormBoolean={setTransitionEditFormBoolean} />
                                </TableBody>
                            </CustomTable>
                        </CustomTableContainer>
                    </Box>
                    <PageResume>
                        <Resume>
                            <Typography sx={{ marginBottom: '23px' }} variant='resumeTitle'>
                                Resumo
                            </Typography>
                            <Box>
                                <ResumeValue sx={{ marginBottom: '12px' }}>
                                    <Typography variant='resumeText'>
                                        Entradas
                                    </Typography>
                                    <Typography variant='resumeValue' color='primary.valueEntry'>
                                        R$ 100,00
                                    </Typography>
                                </ResumeValue>
                                <ResumeValue sx={{ paddingBottom: '19px', marginBottom: '16px', borderBottom: 'solid 1px #EAEAEA' }}>
                                    <Typography variant='resumeText'>
                                        Saídas
                                    </Typography>
                                    <Typography variant='resumeValue' color='primary.valueOutput'>
                                        R$ 100,00
                                    </Typography>
                                </ResumeValue>
                            </Box>
                            <ResumeValue>
                                <Typography variant='resumeTitle'>
                                    Saldo
                                </Typography>
                                <Typography variant='resumeValue' color='#3A9FF1'>
                                    R$ 100,00
                                </Typography>
                            </ResumeValue>
                        </Resume>
                        <DefaultButton variant="contained" onClick={() => setTransitionAddFormBoolean(true)}>
                            <Typography variant='button' color='white'>
                                Adicionar Registro
                            </Typography>
                        </DefaultButton>
                    </PageResume>
                </MainPageAll>
            </MainPageBox>
            <Modal open={userFormBoolean}>
                <UserForm
                    setUserFormBoolean={setUserFormBoolean}
                />
            </Modal>
            <Modal open={transitionEditFormBoolean}>
                <TransitionForm
                    text='Editar'
                    setState={setTransitionEditFormBoolean}
                />
            </Modal>
            <Modal open={transitionAddFormBoolean}>
                <TransitionForm
                    text='Adicionar'
                    setState={setTransitionAddFormBoolean}
                />
            </Modal>
        </>
    )
}